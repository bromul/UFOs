# UFO Sightings

## Overview

In this project, we analyzed data on UFO sightings, culminating in the creation of a local server that allows easy filtering of the data.

### Purpose

During this project, we sought to anlayze UFO data and create an easy-to-use, front-facing site to allow any person to easily filter through the data without needing programming or coding knoxledge. This site allows the user to perform searches on the date, city, country, state, and shape of UFO sightings within the dataset.  

## Results

Performing searches on the site is relatively easy with users able to filter by putting in their desired keywords in the filter box on the right-hand side of the page: 

![Filter Box and Data](static/images/filter_with_data.PNG)

Here we can more closely see the filters that the user can apply: date, city, state, country, and shape of the UFO sighting:

![Close-Up of Filter Box](static/images/filter_box.PNG)

It should be noted that each input box has placeholder text within it, to help the user understand how queries should be templated. 

In order to apply a filter, the user only has to input what they want to filter for and then press 'Enter' or click anywhere on the screen. In this example, we are searching for sightings in the city of El Cajon:

![UFO Sightings in El Cajon](static/images/el_cajon_filter.PNG)

We can also apply more than one filter at the same time! For example, if we wanted to see UFO sightings in El Cajon that were also a 'light' shape, we can do that, as seen below:

![UFO Sightings in El Cajon - Light](static/images/cajon_light.PNG)

Or we could be more specific and want UFO sightings in El Cajon that were a 'light' shape on 4 January 2010:

![UFO Sightings in El Cajon - Light - Jan 4](static/images/cajon_light_jan4.PNG)

Ultimately, the user can apply up to 5 filters (date, city, state, country, and shape) at the same time while analyzing this dataset.

## Summary

### Drawbacks

While technically impressive, this website still has some drawbacks that leaves the user wanting. For instance, the event listener within the code is only triggered by 'change'. This is effective for most situations but can sometimes mess up if the page is reloaded while inputs are stil within their boxes. In this situation, the table may not filter properly until the inputs are erased and re-entered. 

Additionally, by only offering filtering services, the amount of analysis that can be done on the data is sorely limited. Adding further functionality, e.g., statistics for certain countries, cities, date, shapes, etc., could provide users with greater insight on where UFOs are typicaly seen. This would, of course, be limited by the data we can obtain, but even an incomplete dataset like ours could offer great statistical potential. 

### Future Development

While this project is officially complete, this is also only the beginning for it. It can be improved and developed further to increase functionality and improve the user experience. These potential developments include, but are not limited to:
- Technically:
  - Updating the filtering logic and event listeners to ensure the filters always accurately apply to the dataset when the inputs are filled in
  - Long term, it would be interesting to add a map (heat or otherwise) that marks where UFOs have been sighted. This would provide a nice visualization of the data and allow users to seek out UFO 'hot spots'
  
- User Experience:
  - Adding notes on the shapes that can be filtered. Many 'shapes' are not what people generally think of as a shape, e.g. light, and it may be prudent to make users aware of the possible filters they can use. 
  - Users might enjoy a 'Sighting of the Day' feature near the top of the page, where one sighting in the data is randomly selected on a daily basis and prominently displayed. This would bring users into _contact_ with sightings they may otherwise miss in the mass of data.
