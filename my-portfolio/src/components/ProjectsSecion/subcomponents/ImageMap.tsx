// Imágenes de Clostech SPA - Versión 1
import spaV1Home from '@/../public/image/projects/clostech-spa/web1/home.jpg';
import spaV1HomeResp from '@/../public/image/projects/clostech-spa/web1/home-responsive.jpg';
import spaV1About from '@/../public/image/projects/clostech-spa/web1/sobre-nosotros.jpg';
import spaV1AboutResp from '@/../public/image/projects/clostech-spa/web1/sobre-nosotros-responsive.jpg';
import spaV1App from '@/../public/image/projects/clostech-spa/web1/servicios-app.jpg';
import spaV1AppResp from '@/../public/image/projects/clostech-spa/web1/servicios-app-responsive.jpg';
import spaV1Mirror from '@/../public/image/projects/clostech-spa/web1/espejo-virtual.jpg';
import spaV1MirrorResp from '@/../public/image/projects/clostech-spa/web1/espejo-virtual-responsive.jpg';

// Imágenes de Clostech SPA - Versión 2
import spaV2Home from '@/../public/image/projects/clostech-spa/web2/home.jpg';
import spaV2HomeResp from '@/../public/image/projects/clostech-spa/web2/home-responsive.jpg';
import spaV2About from '@/../public/image/projects/clostech-spa/web2/sobre-nosotros.jpg';
import spaV2AboutResp from '@/../public/image/projects/clostech-spa/web2/sobre-nosotros-responsive.jpg';
import spaV2Mirror from '@/../public/image/projects/clostech-spa/web2/espejo-virtual.jpg';
import spaV2MirrorResp from '@/../public/image/projects/clostech-spa/web2/espejo-virtual-responsive.jpg';

// Imágenes de Clostech APP
import appLogin from '@/../public/image/projects/clostech-app/login.jpg';
import appLoginResp from '@/../public/image/projects/clostech-app/login-responsive.jpg';
import appHome from '@/../public/image/projects/clostech-app/home.jpg';
import appHomeResp from '@/../public/image/projects/clostech-app/home-responsive.jpg';
import appCreate from '@/../public/image/projects/clostech-app/create-outfit.jpg';
import appCreateResp from '@/../public/image/projects/clostech-app/create-outfit-responsive.jpg';
import appAI from '@/../public/image/projects/clostech-app/ia-clostech.jpg';
import appAIResp from '@/../public/image/projects/clostech-app/ia-clostech-responsive.jpg';
import appNew from '@/../public/image/projects/clostech-app/nueva-prenda.jpg';
import appNewResp from '@/../public/image/projects/clostech-app/nueva-prenda-responsive.jpg';
import appProfile from '@/../public/image/projects/clostech-app/pantalla-perfil.jpg';
import appProfileResp from '@/../public/image/projects/clostech-app/pantalla-perfil-responsive.jpg';

// Imágenes de Clostech Portal Empresas - Versión 1
import portalV1UsoCosto from '@/../public/image/projects/clostech-portal/web1/uso-costo.jpg';
import portalV1UsoActividad from '@/../public/image/projects/clostech-portal/web1/uso-actividad.jpg';
import portalV1Planes from '@/../public/image/projects/clostech-portal/web1/planes.jpg';
import portalV1ApiKey from '@/../public/image/projects/clostech-portal/web1/api-key.jpg';
import portalV1ApiKeyModal from '@/../public/image/projects/clostech-portal/web1/api-keys-modal.jpg';
import portalV1ConfigDetalles from '@/../public/image/projects/clostech-portal/web1/config-detalles.jpg';
import portalV1CustomButton from '@/../public/image/projects/clostech-portal/web1/custom-button.jpg';

// Imágenes de Clostech Portal Empresas - Versión 2
import portalV2Login from '@/../public/image/projects/clostech-portal/web2/login.jpg';
import portalV2Home from '@/../public/image/projects/clostech-portal/web2/home.jpg';
import portalV2Consumo from '@/../public/image/projects/clostech-portal/web2/consumo.jpg';
import portalV2ApiKey from '@/../public/image/projects/clostech-portal/web2/api-keys.jpg';
import portalV2ImportarProd from '@/../public/image/projects/clostech-portal/web2/importar-producto.jpg';
import portalV2Tiendanube from '@/../public/image/projects/clostech-portal/web2/tiendanube.jpg';
import portalV2CustomModal from '@/../public/image/projects/clostech-portal/web2/custom-modal.jpg';


import { StaticImageData } from 'next/image';

export const Images = {
  spa: {
    v1: {
      home: spaV1Home,
      homeResp: spaV1HomeResp,
      about: spaV1About,
      aboutResp: spaV1AboutResp,
      app: spaV1App,
      appResp: spaV1AppResp,
      mirror: spaV1Mirror,
      mirrorResp: spaV1MirrorResp
    },
    v2: {
      home: spaV2Home,
      homeResp: spaV2HomeResp,
      about: spaV2About,
      aboutResp: spaV2AboutResp,
      mirror: spaV2Mirror,
      mirrorResp: spaV2MirrorResp
    },
  },
  app: {
    login: appLogin,
    loginResp: appLoginResp,
    home: appHome,
    homeResp: appHomeResp,
    create: appCreate,
    createResp: appCreateResp,
    ai: appAI,
    aiResp: appAIResp,
    new: appNew,
    newResp: appNewResp,
    profile: appProfile,
    profileResp: appProfileResp
  },
  portal: {
    v1: {
      usoCosto: portalV1UsoCosto,
      usoActividad: portalV1UsoActividad,
      planes: portalV1Planes,
      apiKey: portalV1ApiKey,
      apiKeyModal: portalV1ApiKeyModal,
      configDetalles: portalV1ConfigDetalles,
      customButton: portalV1CustomButton
    },
    v2: {
      login: portalV2Login,
      home: portalV2Home,
      consumo: portalV2Consumo,
      apiKey: portalV2ApiKey,
      importarProd: portalV2ImportarProd,
      tiendanube: portalV2Tiendanube,
      customModal: portalV2CustomModal
    }
  }
};

export const imageMap: Record<string, StaticImageData> = {
  // SPA
  spaV1Home: Images.spa.v1.home,
  spaV1HomeResp: Images.spa.v1.homeResp,
  spaV1About: Images.spa.v1.about,
  spaV1AboutResp: Images.spa.v1.aboutResp,
  spaV1App: Images.spa.v1.app,
  spaV1AppResp: Images.spa.v1.appResp,
  spaV1Mirror: Images.spa.v1.mirror,
  spaV1MirrorResp: Images.spa.v1.mirrorResp,
  spaV2Home: Images.spa.v2.home,
  spaV2HomeResp: Images.spa.v2.homeResp,
  spaV2About: Images.spa.v2.about,
  spaV2AboutResp: Images.spa.v2.aboutResp,
  spaV2Mirror: Images.spa.v2.mirror,
  spaV2MirrorResp: Images.spa.v2.mirrorResp,

  // APP
  appLogin: Images.app.login,
  appLoginResp: Images.app.loginResp,
  appHome: Images.app.home,
  appHomeResp: Images.app.homeResp,
  appCreate: Images.app.create,
  appCreateResp: Images.app.createResp,
  appAI: Images.app.ai,
  appAIResp: Images.app.aiResp,
  appNew: Images.app.new,
  appNewResp: Images.app.newResp,
  appProfile: Images.app.profile,
  appProfileResp: Images.app.profileResp,

  // PORTAL v1
  portalV1UsoCosto: Images.portal.v1.usoCosto,
  portalV1UsoActividad: Images.portal.v1.usoActividad,
  portalV1Planes: Images.portal.v1.planes,
  portalV1ApiKey: Images.portal.v1.apiKey,
  portalV1ApiKeyModal: Images.portal.v1.apiKeyModal,
  portalV1ConfigDetalles: Images.portal.v1.configDetalles,
  portalV1CustomButton: Images.portal.v1.customButton,

  // PORTAL v2
  portalV2Login: Images.portal.v2.login,
  portalV2Home: Images.portal.v2.home,
  portalV2Consumo: Images.portal.v2.consumo,
  portalV2ApiKey: Images.portal.v2.apiKey,
  portalV2ImportarProd: Images.portal.v2.importarProd,
  portalV2Tiendanube: Images.portal.v2.tiendanube,
  portalV2CustomModal: Images.portal.v2.customModal,
};