import { jobType } from './job';
import { statisticType } from './statistic';
import { serviceType } from './service';
import { clientLogoType } from './clientLogo';
import { siteSettingsType } from './siteSettings';
import { whyPraxisType } from './whyPraxis';
import { pricingType } from './pricing';
import { faqItemType, faqType } from './faq';
import { localizedStringType } from './objects/localizedString';
import { aboutPageType, founderType } from './aboutPage';
import { testimonialType } from './testimonial';
import { processPageType, processStepType } from './processPage';

export const schemaTypes = [
  localizedStringType,
  founderType,
  jobType,
  statisticType,
  serviceType,
  clientLogoType,
  siteSettingsType,
  whyPraxisType,
  pricingType,
  faqItemType,
  faqType,
  aboutPageType,
  processStepType,
  processPageType,
  testimonialType,
];
