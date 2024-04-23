import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"

i18next.use(LanguageDetector).use(initReactI18next).use(Backend).init({
    debug: true,
    lng:"en",
    fallbackLng:"en",
    returnObjects: true,

    // resources:{
    //     en: {
    //         translation: {
    //           greeting: "Hello, Welcome!",
    //           dec:{
    //             sentens:"The sun rises in the east every morning She loves to read books in her spare time Learning new languages broadens one's perspective Dogs are known for their loyalty to <1>{{humans}}</1>"
    //           }
    //         }
    //     },
    //     fr: {
    //         translation: {
    //           greeting: "Bonjour, Bienvenue !",
    //           dec:{
    //             sentens:"Le soleil se lève à l'est chaque matin.Elle aime lire des livres pendant son temps libre. Apprendre de nouvelles langues élargit la perspective.Les chiens sont connus pour leur loyauté envers les <1>{{humans}}</1>."
    //           }
    //         }
    //     },
    //     hi: {
    //         translation: {
    //           greeting: "सेग सेट एटजीएफ",
    //           dec:{
    //             sentens:"सूर्य प्रतिदिन पूर्व में उगता उसे अपने खाली समय में किताबें पढ़ना पसंद है। नई भाषाओं को सीखना मानसिकता को विस्तारित करता है। कुत्ते <1>{{humans}}</1> के प्रति उनकी निष्ठा के लिए जाने जाते हैं।"
    //           }
    //         }
    //     },
    //     ar: {
    //         translation: {
    //           greeting: "مرحبًا ، أهلاً بك !",
    //           dec:{
    //             sentens:"<1>{{humans}}</1> الشمس في الشرق كل صباح. تحب قراءة الكتب في أوقات فراغها. تعلم اللغات الجديدة يوسع الأفق. تعرف الكلاب بولائها للبشر."
    //           }
    //         }
    //     }
    // }
    
});
