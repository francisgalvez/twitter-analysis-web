# Twitter Analysis Web
This is a web application related to the [Twitter Analysis project](https://github.com/francisgalvez/twitter-analysis) in which we can visualize the streamed data on a Leaflet map.

The Leaflet plugins used in the map are:
* [Awesome Markers](https://github.com/lvoogdt/Leaflet.awesome-markers) by Lennard Voogdt.
* [Leaflet Fullscreen](https://github.com/Leaflet/Leaflet.fullscreen)
* [Leaflet Control Search](https://github.com/stefanocudini/leaflet-search) by Stefano Cudini.
* [Leaflet Locate Control](https://github.com/domoritz/leaflet-locatecontrol) by Dominik Moritz.
* [Leaflet Marker Cluster](https://github.com/Leaflet/Leaflet.markercluster)
* [Leaflet Timeline Slider](https://github.com/svitkin/leaflet-timeline-slider) by Sol Vitkin.

Specifically, this project has been deployed in Openshift, thanks to one of its preconfigured Node templates. Nevertheless, it can be successfully deployed in any other way.

## Main page
In this section, we can see the Leaflet map with all the tweets (and clusters) displayed on it. On the left side, there are several plugins for searching locations, zoomimg in and out or enabling the dark mode, among other functionalities. Besides, at the bottom we have the Time Filter plugin, with which we can change the antiqueness of the displayed tweets.

On the right side, we can enable and disable the layers of the map, that are related to the topics with which we filter the tweets.

![Main page](https://github.com/francisgalvez/twitter-analysis-web/blob/master/previews/vista-inicial.png)

If you click in one of the markers, a popup will raise and show the content of the tweet. For this purpose the [Twitter Javascript Plugin](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/overview.html) has been used.

![Tweet detail](https://github.com/francisgalvez/twitter-analysis-web/blob/master/previews/detalle-tweet.png)

## About page
This section is dedicated to the explanation of the project, its objectives and how it works.

![About section](https://github.com/francisgalvez/twitter-analysis-web/blob/master/previews/about.png)

## API page
As the API can be accessed not only by the developed app but also by users, in this section we explain the way the user has to obtain the API key that will provide him/her access to some routes of the API REST built during the project.

![](https://github.com/francisgalvez/twitter-analysis-web/blob/master/previews/api.png)

## Sign in/Sign up page
To obtain the mentioned API key, the user has to register in the platform. So, in this part of the website, he/she can both sign up or sign in and access the dashboard in which the user's information is displayed (and the password can be changed).

![](https://github.com/francisgalvez/twitter-analysis-web/blob/master/previews/login.png)
