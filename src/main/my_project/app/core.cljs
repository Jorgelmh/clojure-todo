(ns my-project.app.core
  (:require [reagent.dom :as rdom] [my-project.app.todo :refer [todo-app]]))

(defn app []
  [todo-app])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
