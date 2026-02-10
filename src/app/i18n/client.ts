

'use client';

import { useEffect, useState } from 'react';
import { useTranslation as useTranslationOrg } from 'react-i18next';
import i18n from './index';

// Ensure i18n is initialized
if (typeof window !== 'undefined') {
  i18n;
}

export function useTranslation(lng: string, ns: string = 'common') {
  const ret = useTranslationOrg(ns);
  const { i18n: i18nInstance } = ret;
  const [activeLng, setActiveLng] = useState(i18nInstance.resolvedLanguage);

  useEffect(() => {
    if (activeLng === lng) return;
    setActiveLng(lng);
  }, [activeLng, lng]);

  useEffect(() => {
    if (!lng || i18nInstance.resolvedLanguage === lng) return;
    if (typeof i18nInstance.changeLanguage === 'function') {
      i18nInstance.changeLanguage(lng);
    }
  }, [lng, i18nInstance]);

  return ret;
}  