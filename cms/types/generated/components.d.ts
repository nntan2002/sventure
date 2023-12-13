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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'feature.feature': FeatureFeature;
    }
  }
}
