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

export interface BannerBannerSingle extends Schema.Component {
  collectionName: 'components_banner_banner_singles';
  info: {
    displayName: 'BannerSingle';
    description: '';
  };
  attributes: {
    Image: Attribute.Media;
  };
}

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    Title: Attribute.String;
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

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SocialMediaSocialMedia extends Schema.Component {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'SocialMedia';
  };
  attributes: {
    UrlMess: Attribute.String;
    UrlZalo: Attribute.String;
    Hotline: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.about-us': AboutUsAboutUs;
      'banner.banner-single': BannerBannerSingle;
      'banner.banner': BannerBanner;
      'feature.feature': FeatureFeature;
      'menu-footer.menu-footer': MenuFooterMenuFooter;
      'menu-footer.menu-item': MenuFooterMenuItem;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'social-media.social-media': SocialMediaSocialMedia;
    }
  }
}
