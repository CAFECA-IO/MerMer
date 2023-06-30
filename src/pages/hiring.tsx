import Head from 'next/head';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import HiringItem from '../components/hiring_item/hiring_item';
import {useState} from 'react';
import {jobList} from '../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction, ILocale} from '../interfaces/locale';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const HiringPage = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  // Info: (20230630 - Julian) 用來控制 HiringItem 的展開狀態
  const [showJobIndex, setShowJobIndex] = useState('');

  const displayHiringItems = jobList.map(({jobTitle, details, descriptions, requirements}) => {
    return (
      <HiringItem
        key={jobTitle}
        jobTitle={jobTitle}
        details={details}
        descriptions={descriptions}
        requirements={requirements}
        showJobIndex={showJobIndex}
        setShowJobIndex={setShowJobIndex}
      />
    );
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>MerMer - Hiring</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex w-screen flex-1 flex-col bg-darkBlue3 py-20">
        <div className="flex min-h-screen w-full flex-col items-center justify-start bg-hiringBanner bg-contain bg-top bg-no-repeat font-Dosis">
          <h1 className="mt-1/3 text-2xl font-bold drop-shadow-heightLight lg:text-54px">
            {t('HIRING_PAGE.BANNER')}
          </h1>

          <div className="flex w-full flex-col space-y-5 px-4 py-6 lg:space-y-10 lg:p-20">
            {displayHiringItems}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const getStaticPropsFunction = async ({locale}: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticProps = getStaticPropsFunction;

export default HiringPage;
