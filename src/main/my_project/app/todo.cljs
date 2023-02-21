(ns my-project.app.todo
  (:require
   [reagent.core :as r]
   [clojure.string :refer [join]]))

(def todo-categories ["Entertainment" "Work" "Cooking" "Sports"])

(def counter (r/atom 0))

(defn get-status-color
  "Get Color for the current activity status"
  [status]
  (cond
    (= status "To-Do") "paleturquoise"
    (= status "In-Progress") "yellow"
    (= status "Complete") "chartreuse"))

(defn add-new-todo
  "Push new To-Do"
  [todos new-todo]
  (let [id (swap! counter inc)]
    (assoc todos id (assoc new-todo :id id))))

(def todo-detail-validations
  {:name { :message "Please provide a name", :validation not-empty }
   :category { :message "Please provide a category", :validation not-empty }})

(defn validate-inputs
  "Check that new input meets criteria"
  [to-validate]
  (reduce (fn[errors validation]
            (let [[fieldname validations] validation
                  value (get to-validate fieldname)
                  no-error ((:validation validations) value)]
              (if no-error
                errors
                (assoc errors fieldname (:message validations)))
              )
            )
          {}
          todo-detail-validations))

(defn format-error-message
  "Get a single string with the error messages"
  [errors]
  (join ", " (map #(second %) errors)))

(defn todo-form
  "Data will be input over here"
  [todo-list]
  (let [name (r/atom "")
        category (r/atom "")]
    (fn []
      [:div { :class "todo-input-container" }
       [:h2 "Add activity"]
       [:div.input-fields
        [:input {:type "text"
                 :value @name
                 :placeholder "Activity name"
                 :on-change #(reset! name (-> % .-target .-value))}]
        [:select {:value @category :on-change #(reset! category (-> % .-target .-value))}
         [:option { :disabled true, :value "" } "Choose Category"]
         (for [item todo-categories]
           ^{:key item} [:option {:value item} item])]
        [:button.add-button {:on-click #(let [new-todo { :name @name, :category @category, :status "To-Do" }
                                              validations (validate-inputs new-todo)]
                                          (if (= (count validations) 0)
                                            (do
                                              (reset! todo-list (add-new-todo @todo-list new-todo))
                                              (reset! category "")
                                              (reset! name ""))
                                            (js/alert (format-error-message validations))))}
         "Add"]]])))

(defn todo-item
  [{:keys [name category status]} on-delete on-status-change]
  [:li.todo-item { :style { :background-color (get-status-color status) } }
   [:div.todo-details
    [:p name]
    [:p category]]
   [:div.item-buttons
    [:select {:value status, :on-change #(on-status-change (-> % .-target .-value)), :className "activity-status-dropdown"}
     [:option {:value "To-Do"} "To-Do"]
     [:option {:value "In-Progress"} "In-Progress"]
     [:option {:value "Complete"} "Complete"]]
    [:button.delete-activity {:on-click on-delete} "Delete"]
    ]])

(defn todo-iter
  "Renders the list"
  [todo-list]
  [:div { :class "todo-list-container" }
   [:h2 "List of activities"]
   (if (= (count @todo-list) 0) 
     [:p { :style { :text-align "center", :margin-top "15px" } } "No items added yet" ]
      [:ul 
       (for [item (map #(second %) @todo-list)]
                                    ^{:key (:id item)}
                                    [todo-item item
                                     #(swap! todo-list dissoc (:id item))
                                     #(swap! todo-list update (:id item) assoc :status %)])])])

(defn todo-app
  "My Todo Application using clojure"
  []
  (let [todo-list (r/atom {})]
    (fn []
      [:div.app-container
       [:div.sub-container
        [:h1 "To-Do App in ClojureScript"]
        [todo-form todo-list]
        [todo-iter todo-list]
        [:p.status-note "Note: Change status to see real-time color updates"]]]
      ))
  )