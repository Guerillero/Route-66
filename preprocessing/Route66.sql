SELECT
  page_title, gt_lat, gt_lon, gt_type, cl_to
FROM page
JOIN geo_tags
ON gt_page_id = page_id
JOIN categorylinks
ON cl_from = page_id
WHERE cl_to = "U.S._Route_66"
OR cl_to = "Buildings_and_structures_on_U.S._Route_66"
OR cl_to = "Bridges_on_U.S._Route_66"
OR cl_to = "Visitor_attractions_along_U.S._Route_66"
OR cl_to = "Ghost_towns_on_U.S._Route_66"
OR cl_to LIKE 'U.S._Route_66_in_%'
AND gt_globe = 'earth'
AND page_namespace = 0
