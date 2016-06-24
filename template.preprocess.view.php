<?php
function hook_preprocess_views_view(&$vars) {
  if ($vars['view']->name == 'masonry'){
       $theme_path = drupal_get_path('theme', 'hook');
       drupal_add_js($theme_path . '/js/plugins/masonry.js');
  }
}
?>