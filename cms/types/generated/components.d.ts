import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsAboutUs extends Schema.Component {
  collectionName: 'components_about_us_aboutuses';
  info: {
    displayName: 'AboutUs';
    description: '';
  };
  attributes: {
    TitleSection: Attribute.String;
    TitleContent: Attribute.String;
    SubTitleContent: Attribute.String;
    Content: Attribute.RichText;
    Image: Attribute.Media;
    TitleButton: Attribute.String;
    SlugButton: Attribute.String;
  };
}

export interface FeatureFeature extends Schema.Component {
  collectionName: 'components_feature_features';
  info: {
    displayName: 'Feature';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
    Title: Attribute.String;
  };
}

export interface MenuFooterMenuFooter extends Schema.Component {
  collectionName: 'components_menu_footer_menu_footers';
  info: {
    displayName: 'Menu footer';
    description: '';
  };
  attributes: {
    TitleMenu: Attribute.String;
    MenuItem: Attribute.Component<'menu-footer.menu-item', true>;
  };
}

export interface MenuFooterMenuItem extends Schema.Component {
  collectionName: 'components_menu_footer_menu_items';
  info: {
    displayName: 'MenuItem';
    description: '';
  };
  attributes: {
    TitleItem: Attribute.String;
    UrlItem: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'feature.feature': FeatureFeature;
      'menu-footer.menu-footer': MenuFooterMenuFooter;
      'menu-footer.menu-item': MenuFooterMenuItem;
    }
  }
}
