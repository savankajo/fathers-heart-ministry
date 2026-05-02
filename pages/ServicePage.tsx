import React, { useMemo, useState } from 'react';
import SEO from '../components/SEO';

type SermonVideo = {
  id: string;
  title: string;
  published?: string;
};

type SermonPlaylist = {
  id: string;
  title: string;
  thumbnailVideoId: string;
};

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@fathersheartchurch2023';

const SERMONS: SermonVideo[] = [
  {
    id: "yGtkL-i55_0",
    title: "The Patience & Perseverance / الصبر والمثابره / Episode #1",
    published: "4d ago"
  },
  {
    id: "T9QNQkoYcyw",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي / Episode #6",
    published: "12d ago"
  },
  {
    id: "tRixx-bk_Qo",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي / Episode #5",
    published: "2w ago"
  },
  {
    id: "R6cGdZp7sp4",
    title: "Resurrection Celebration / احتفال القيامة",
    published: "3w ago"
  },
  {
    id: "gEM3bGzBHXs",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي / Episode #4",
    published: "1mo ago"
  },
  {
    id: "-jVF0OLUQTA",
    title: "What Was the Evil Spirit That Tormented Saul? | ما هو الروح الرديء الذي عذب شاول؟",
    published: "1mo ago"
  },
  {
    id: "3f_N5guRDHQ",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي / Episode #3",
    published: "1mo ago"
  },
  {
    id: "Pw4t6JvNT1U",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي / Episode #2",
    published: "1mo ago"
  },
  {
    id: "Q9SltPVG-mI",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي / Episode #1",
    published: "1mo ago"
  },
  {
    id: "yj250S_4Wig",
    title: "God Hears the Prayers of the Righteous | 1 Peter 3:12الله يسمع صلاة الأبرار | بطرس الأولى 3:12",
    published: "1mo ago"
  },
  {
    id: "7ShxOlN01n0",
    title: "The Power of Righteousness: Living Without Fear | Isaiah 54:14قوة البر: حياة بلا خوف | إشعياء 54:14",
    published: "1mo ago"
  },
  {
    id: "vZDR-PPQm7s",
    title: "The God- Kind of Life (Zoe) | حياه الله بداخلنا | Episode.5",
    published: "2mo ago"
  },
  {
    id: "maHyxcpHgNU",
    title: "الصلاة التي تأتي بنتائج / How to have your prayers answered",
    published: "2mo ago"
  },
  {
    id: "VeWSBuTpec4",
    title: "The God- Kind of Life (Zoe) | حياه الله بداخلنا | Episode.4",
    published: "2mo ago"
  },
  {
    id: "QHqqPFZajSo",
    title: "The God- Kind of Life (Zoe) | حياه الله بداخلنا | Episode.3",
    published: "2mo ago"
  },
  {
    id: "w71MhYD-erQ",
    title: "هل وُلِدتَ من الماء والروح؟ (يوحنا 3:5) Have You Been Born of Water and the Spirit? (John 3:5) |",
    published: "2mo ago"
  },
  {
    id: "zAZ9tggTAok",
    title: "يسوع قام حول الظلام إلى صبح والموت لحياة",
    published: "2mo ago"
  },
  {
    id: "tF_Q1-HXF24",
    title: "The God- Kind of Life (Zoe) | حياه الله بداخلنا | Episode.2",
    published: "2mo ago"
  },
  {
    id: "Oz1N0zcTJQg",
    title: "الذبيحة التي جلبت الحياة / The Sacrifice That Brought Life",
    published: "2mo ago"
  },
  {
    id: "2AAQ6xe9dKw",
    title: "The God- Kind of Life (Zoe) | حياه الله بداخلنا | Episode.1",
    published: "2mo ago"
  },
  {
    id: "mkLxfl8IIpY",
    title: "الصلاة والعلاقة الخفية مع الرب / Prayer and intimate relationship with The Lord",
    published: "3mo ago"
  },
  {
    id: "LqQiq9FVCLo",
    title: "How To Control Your Mind / كيف التحكم في ذهنك",
    published: "3mo ago"
  },
  {
    id: "FOZUWg3f7Uc",
    title: "ما مصدر قيمتك الذاتية / What is the source of your self-worth",
    published: "3mo ago"
  },
  {
    id: "bj6ffi-IFVQ",
    title: "أخلي نفسه أخذا صوره عبد | He emptied Himself, taking the form of a servant",
    published: "4mo ago"
  },
  {
    id: "c7Efb25QZ9Q",
    title: "The Purpose of Jesus’s birth? | لماذا ولد المسيح؟",
    published: "4mo ago"
  },
  {
    id: "NW9Q6xZytwA",
    title: "How to receive your miracle? / كيفيه حدوث المعجزات في حياتك؟",
    published: "4mo ago"
  },
  {
    id: "nTllOP0pSQM",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.13",
    published: "4mo ago"
  },
  {
    id: "k_SDjmEcYTA",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.14",
    published: "4mo ago"
  },
  {
    id: "z1xcaYV16Ds",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.12",
    published: "5mo ago"
  },
  {
    id: "bG9m5gH42oE",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.11",
    published: "5mo ago"
  },
  {
    id: "f0wn-tlgVsA",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.10",
    published: "5mo ago"
  },
  {
    id: "IxpRxAgSMzo",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.9",
    published: "5mo ago"
  },
  {
    id: "T8KuPa44cSQ",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.8",
    published: "5mo ago"
  },
  {
    id: "SGNcv4CyCJE",
    title: "You will be established in righteousness / بِٱلْبِرِّ تُثَبَّتِينَ",
    published: "5mo ago"
  },
  {
    id: "w8AXddElJYU",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.6",
    published: "5mo ago"
  },
  {
    id: "eN9XtOomGdk",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.7",
    published: "5mo ago"
  },
  {
    id: "xOmc4ETrzKo",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.4",
    published: "5mo ago"
  },
  {
    id: "GwYxPY1EdFc",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.5",
    published: "5mo ago"
  },
  {
    id: "olDEGQy5t0A",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.3",
    published: "6mo ago"
  },
  {
    id: "8e76gzApcVQ",
    title: "Fullness Of The Holy Spirit / ملئ الروح القدس",
    published: "6mo ago"
  },
  {
    id: "yIsOdN3hZAY",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.1",
    published: "6mo ago"
  },
  {
    id: "8OTriyMhk0o",
    title: "Godliness has value for all things | التقوي نافعه لكل شيء | Episode.2",
    published: "6mo ago"
  },
  {
    id: "KYG-kmMMsJg",
    title: "How to Prepare for Jesus Return (Thanks Giving) | (عيد الشكر) كيف تستعد لمجيء الرب | Episode.12",
    published: "6mo ago"
  },
  {
    id: "cBfnt-MwyVo",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.11",
    published: "6mo ago"
  },
  {
    id: "5chpBWzs2s4",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.10",
    published: "6mo ago"
  },
  {
    id: "elTCdIaiZzQ",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.9",
    published: "6mo ago"
  },
  {
    id: "ieQwlvuzeek",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.7",
    published: "7mo ago"
  },
  {
    id: "YunbRfoh_p4",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.8",
    published: "7mo ago"
  },
  {
    id: "y1rvYjU4FQ4",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.6",
    published: "7mo ago"
  },
  {
    id: "N52JqXVZCsI",
    title: "العهد الجديد ابتدأ في ميلاد الكنيسة في أعمآل الرسل إصحاح 2/ New Testament Started From Acts 2",
    published: "7mo ago"
  },
  {
    id: "wgpxm-_uY4A",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.5",
    published: "7mo ago"
  },
  {
    id: "yt0PLB5qSx4",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.3",
    published: "7mo ago"
  },
  {
    id: "0f1hQpgEdDg",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.4",
    published: "7mo ago"
  },
  {
    id: "YSbgtd6Mh0s",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب | Episode.2",
    published: "7mo ago"
  },
  {
    id: "Y3YdED5nmpM",
    title: "How to Prepare for Jesus’ Return | كيف تستعد لمجيء الرب | Episode.1",
    published: "7mo ago"
  },
  {
    id: "iIzs0E2ftf4",
    title: "تفعيل الحمايه الألهيه الحلقه 9 / Divine Protection Activation Episode: 9",
    published: "8mo ago"
  },
  {
    id: "VAM9ahM8e5s",
    title: "The Glory of The Sons of God Episode # 2 / مجد اولاد الله حلقة 2",
    published: "8mo ago"
  },
  {
    id: "Un3tyYih9-4",
    title: "تفعيل الحمايه الألهيه الحلقه 8 / Divine Protection Activation Episode: 8",
    published: "8mo ago"
  },
  {
    id: "OsMtm5ELiiM",
    title: "تفعيل الحمايه الألهيه الحلقه 7 / Divine Protection Activation Episode: 7",
    published: "8mo ago"
  },
  {
    id: "Cp-szism6EU",
    title: "The Glory of The Sons of God Episode # 1 / مجد اولاد الله حلقة 1",
    published: "8mo ago"
  },
  {
    id: "NCK5G-FeR3s",
    title: "Redemption and Salvation Episode # 9 / 9 الفداء والخلاص",
    published: "8mo ago"
  },
  {
    id: "U9KQvEyYfXA",
    title: "تفعيل الحمايه الألهيه الحلقه 6 / Divine Protection Activation Episode: 6",
    published: "8mo ago"
  },
  {
    id: "x8c86mwmjnU",
    title: "How To Overcome Your Sorrows Episode 4 / كيف تغلب الحزن حلقة 4",
    published: "9mo ago"
  },
  {
    id: "rWTVms0-ZQo",
    title: "تفعيل الحمايه الألهيه الحلقه 5 / Divine Protection Activation Episode: 5",
    published: "9mo ago"
  },
  {
    id: "rQwNyUksHJ4",
    title: "How To Overcome Your Sorrows Episode 3 / كيف تغلب الحزن حلقة 3",
    published: "9mo ago"
  },
  {
    id: "zWIW3nkc5m4",
    title: "تفعيل الحمايه الألهيه الحلقه 4 / Divine Protection Activation Episode: 4",
    published: "9mo ago"
  },
  {
    id: "dCkGREBIoZE",
    title: "Redemption and Salvation Episode # 8 / الفداء والخلاص",
    published: "9mo ago"
  },
  {
    id: "yldwvmL3IRM",
    title: "أجتماع الشبيبة الحلقة الخامسة عشرة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "9mo ago"
  },
  {
    id: "xf3HRMLsh2o",
    title: "How To Overcome Your Sorrows Episode 1 / كيف تغلب الحزن حلقة 1",
    published: "9mo ago"
  },
  {
    id: "jVOGhP6lfSo",
    title: "How To Overcome Your Sorrows Episode 2 / كيف تغلب الحزن حلقة 2",
    published: "9mo ago"
  },
  {
    id: "o4seUxDQE6U",
    title: "تفعيل الحمايه الألهيه الحلقه 3 / Divine Protection Activation Episode: 3",
    published: "9mo ago"
  },
  {
    id: "fYYnw0pMvTs",
    title: "Redemption and Salvation Episode # 7 / الفداء والخلاص",
    published: "9mo ago"
  },
  {
    id: "R9WshcD9PJw",
    title: "تفعيل الحمايه الألهيه الحلقه ٢ / Divine Protection Activation Episode: 2",
    published: "9mo ago"
  },
  {
    id: "6TG_Mo7_r9Q",
    title: "Prayer Time on Fire By The Power of The Holy Spirit / وقت الصلاة مشتعل بنار الروح القدس",
    published: "9mo ago"
  },
  {
    id: "ws7ZF6VB2Hc",
    title: "اجتماع السبت تفعيل الحمايه الألهيه / Saturday Meeting Divine Protection Activation",
    published: "9mo ago"
  },
  {
    id: "0tiVEj9Ot9I",
    title: "أختبار شفاء القس/ بيتر المعصراني بعد ٣٣ عاما /Pastor Peter’s testimony getting healed after 33 years",
    published: "10mo ago"
  },
  {
    id: "GCorM96vXrM",
    title: "القيامه تبتلع كل موت مع ايمان المستحيلات/The Resurrection that Swallows Death with faith Episode #10",
    published: "10mo ago"
  },
  {
    id: "6MepUT2KKwM",
    title: "Redemption and Salvation Episode # 5 / الفداء والخلاص",
    published: "10mo ago"
  },
  {
    id: "3AdVK_4uNqA",
    title: "Redemption and Salvation Episode # 6 / الفداء والخلاص",
    published: "10mo ago"
  },
  {
    id: "wfF3vB2n3xw",
    title: "شهادة عظيمة من الاخت / جيهان حسان حصلت على شفاء عيونها من ضعف النظر و عدم القدرة على القراءة بوضوح",
    published: "10mo ago"
  },
  {
    id: "i1aq-7cDJ6w",
    title: "القيامه تبتلع كل موت مع الروح القدس/The Resurrection that Swallows Death with Holy Spirit Episode #9",
    published: "11mo ago"
  },
  {
    id: "8oqBToQtwBQ",
    title: "الفداء و الخلاص حلقة 5 / Redemption and Salvation Episode #5",
    published: "11mo ago"
  },
  {
    id: "cHB8wFaEqy8",
    title: "القيامه تبتلع كل موت حلقة 8 / The Resurrection that Swallows Death Episode #8",
    published: "11mo ago"
  },
  {
    id: "rP77Kc5eF4g",
    title: "القيامه تبتلع كل موت حلقة 7 / The Resurrection that Swallows Death Episode #7",
    published: "11mo ago"
  },
  {
    id: "dQMOA_0htWw",
    title: "Redemption and Salvation Episode # 3 / الفداء والخلاص",
    published: "11mo ago"
  },
  {
    id: "0WpPyfA8vAU",
    title: "Saturday Meeting Sep 16 / 2023, worship night / ليلة تسبيح وعبادة",
    published: "11mo ago"
  },
  {
    id: "WfdRevEF3x4",
    title: "God's Special Calling / دعوه الله ( الدعوه الخاصه)",
    published: "11mo ago"
  },
  {
    id: "1TILG0KvnLc",
    title: "God's Calling Episode 1 / 1 دعوه الله حلقة",
    published: "11mo ago"
  },
  {
    id: "5v_EqbPbyiA",
    title: "God's Calling Episode 2 / 2 دعوه الله",
    published: "11mo ago"
  },
  {
    id: "QJGKcsNPafo",
    title: "القيامه تبتلع كل موت / The Resurrection that Swallows Death Episode #6",
    published: "11mo ago"
  },
  {
    id: "9U-WLWekuQ4",
    title: "Redemption and Salvation Episode # 2 / الفداء والخلاص",
    published: "11mo ago"
  },
  {
    id: "9-PUisLsJlg",
    title: "Redemption and Salvation / الفداء والخلاص",
    published: "11mo ago"
  },
  {
    id: "Kf0jY0XKs3M",
    title: "الميلاد الثاني / Second Spiritual Birth",
    published: "11mo ago"
  },
  {
    id: "X7ijw5dwbbY",
    title: "It Is More Blessed To Give Than To Receive / مغبوط هو العطاء أكثر من الاخذ",
    published: "1y ago"
  },
  {
    id: "dkyAIQDS5E0",
    title: "سلسله عظات الكلمه (الحلقه الخامسة) : الاعتراف بكلمة الله / The Confession of The Word of God",
    published: "1y ago"
  },
  {
    id: "H2JasZDe7JY",
    title: "سلسله عظات الكلمه (الحلقه الأولي) : أزرع الكلمه في قلبك / Plant The Word In Your Land",
    published: "1y ago"
  },
  {
    id: "4gSsTx9qmxM",
    title: "سلسله عظات الكلمه (الحلقه الرابعة) : فاعلية كلمة الله / The Automaticity of God's word",
    published: "1y ago"
  },
  {
    id: "4fa94GcKMAo",
    title: "سلسله عظات الكلمه (الحلقه الثالثة) : أهمية كلمة الله - الجزء الثاني / The Importance of God's Word",
    published: "1y ago"
  },
  {
    id: "2fRGNba8rlw",
    title: "سلسله عظات الكلمه (الحلقه السادسة) : كيف تاتي بثمر / How to bring Fruits",
    published: "1y ago"
  },
  {
    id: "3WNpXCv-ANw",
    title: "سلسله عظات الكلمه (الحلقه الثانية) : أهمية الكلمة / Importance of The Word",
    published: "1y ago"
  },
  {
    id: "ZeIlLC3-EAM",
    title: "خذ لحظة واستمتع بفنجان القهوة مع بودكاست “قهوة مع الراعي” وقت لاكتشاف أجوبة لأسئلتك الخفية",
    published: "1y ago"
  },
  {
    id: "wMyDPs4JIY4",
    title: "The Glorious of Resurrection / امجاد القيامة (Episode #3)",
    published: "1y ago"
  },
  {
    id: "sCpbljlTXTE",
    title: "The Glorious of Resurrection / امجاد القيامة (Episode #1)",
    published: "1y ago"
  },
  {
    id: "bqnrk4WUJQ8",
    title: "The Glorious of Resurrection That Swallows Death / امجاد القيامة تبتلع كل موت (Episode #4)",
    published: "1y ago"
  },
  {
    id: "dwEc3zgjBAc",
    title: "The Glorious of Resurrection / امجاد القيامة (Episode #2)",
    published: "1y ago"
  },
  {
    id: "iB4eXCAodPg",
    title: "The Spirit of the Lord will come upon mightily, and you will be changed into another man Oct/9/2024",
    published: "1y ago"
  },
  {
    id: "15-n7JA66fo",
    title: "أجتماع الشبيبة الحلقة الرابعة عشرة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "V4sX3fbv-IA",
    title: "أجتماع الشبيبة الحلقة الثالثة عشرة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "0X7bBV76NHY",
    title: "أجتماع الشبيبة الحلقة الثانية عشرة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "5aiWKGnycKQ",
    title: "أجتماع الشبيبة الحلقة الحادية عشرة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "ISQeXKUnjC8",
    title: "أجتماع الشبيبة الحلقة العاشرة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "36HGoAe1MbA",
    title: "أجتماع الشبيبة الحلقة التاسعة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "pud7FFj7b8I",
    title: "أجتماع الشبيبة الحلقة الثامنة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "uh3Xb8746dU",
    title: "أجتماع الشبيبة الحلقة السابعة : دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "V6-krlXqtC8",
    title: "How To Overcome Your Sorrows Episode 5 / كيف تغلب الحزن حلقة 5",
    published: "1y ago"
  },
  {
    id: "twrv6OfKN1o",
    title: "احتفال الجمعة العظيمة / Good Friday celebration",
    published: "1y ago"
  },
  {
    id: "fhmGvQlREO0",
    title: "Saturday Meeting May/25/2024",
    published: "1y ago"
  },
  {
    id: "txbDVeVg798",
    title: "Saturday Meeting May/18/2024",
    published: "1y ago"
  },
  {
    id: "rRjUWaM8bd8",
    title: "Saturday Meeting May/11/2024",
    published: "1y ago"
  },
  {
    id: "28QClsXLpjY",
    title: "Saturday Meeting June/01/ 2024",
    published: "1y ago"
  },
  {
    id: "Qk-jr_HumUc",
    title: "أنتصر علي المديانيين",
    published: "1y ago"
  },
  {
    id: "_-9YI855G-w",
    title: "اطرد الحويين من حياتك",
    published: "1y ago"
  },
  {
    id: "Gjidt5B86IM",
    title: "فمن هو أعظم في ملكوت السموات ؟ الحلقه الثانيه:خطوات الأتضاع القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "Qr81eWW-cdk",
    title: "الحلقه الأولي: دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "iKH-mIrtKHs",
    title: "اجتماع الشبيبة الحلقه الثانية: دراسه عن تجديد الذهن وخلاص النفس أجتماع الشبيبه القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "riwOz6RvaNk",
    title: "أجتماع الشبيبة الحلقة الخامسه: دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "fQjbdCzipGg",
    title: "أجتماع الشبيبة الحلقة الرابعة: دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "ib1BgSIm1tY",
    title: "مفاتيح الصلاة المستجابة الحلقة الاولى: الابعاد الثلاثة للصلاة",
    published: "1y ago"
  },
  {
    id: "8uakBvugihs",
    title: "مفاتيح الصلاه المستجابه الحلقه الثالثه 3: المعطلات القانونيه للإستجابه",
    published: "1y ago"
  },
  {
    id: "KUN6nvEn1aU",
    title: "مفاتيح الصلاه المستجابه الحلقه الثانيه: تعلم مباديء المحكمه السماويه.",
    published: "1y ago"
  },
  {
    id: "wr6oPShDeAw",
    title: "مفاتيح الصلاه المستجابه الحلقه الرابعه 4: امرأه الخروف - الملائكه - العابدين في محكمه السماء",
    published: "1y ago"
  },
  {
    id: "9p7lJr74_tQ",
    title: "مفاتيح الصلاه المستجابه الحلقه الخامسه 5: تنفيذ احكام الصليب",
    published: "1y ago"
  },
  {
    id: "5fsHE-UT18c",
    title: "مفاتيح الصلاه المستجابه الحلقه السادسه 6: دم يتكلم - شفاعه دم المسيح",
    published: "1y ago"
  },
  {
    id: "XbLxewt8MBk",
    title: "مفاتيح الصلاه المستجابه الحلقه السابعه 7 : سر الأنتصار في ساحه المعركه",
    published: "1y ago"
  },
  {
    id: "q88yt5Hxz_o",
    title: "مفاتيح الصلاة المستجابة الحلقة رقم 10 - و يفني في هذا الجبل وجه النقاب",
    published: "1y ago"
  },
  {
    id: "Gn1lkuGqWnA",
    title: "مفاتيح الصلاه المستجابه الحلقه الثامنه 8 : يسوع شفيعنا في محكمه السماء / Jesus is our Advocate",
    published: "1y ago"
  },
  {
    id: "hmagjrLRwA4",
    title: "مفاتيح الصلاه المستجابه. الحلقه التاسعه: الروح القدس يحامي عنا في محكمه السماء. القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "veKcUNTa90I",
    title: "فمن هو أعظم في ملكوت السموات ؟الحلقه الأولي: الأتضاع القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "I2mDBFKleiU",
    title: "أجتماع الشبيبة الحلقة الثالثة: دراسه عن تجديد الذهن وخلاص النفس القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "2rHLunU-kIo",
    title: "مفاتيح الصلاة المستجابة-الحلقة 11 اهمية الصلاة بالروح-التكلم بالاسرار القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "zQX9uPbuviY",
    title: "مفاتيح الصلاة المستجابة - الحلقه 15 اهمية الصلاة بالروح - التكلم بالأسرار القس/ بيتر المعصراني",
    published: "1y ago"
  },
  {
    id: "W7bBlsHB_Gs",
    title: "الاجتماع الصباحي فدي نفسي - المحاضره السادسه - د. ثناء زغلول. part 2",
    published: "2y ago"
  },
  {
    id: "QZeCC9UkbjM",
    title: "كنيسه قلب الآب- فانكوفر السبت ٢١ اكتوبر ٢٠٢٣ مفاتيح الشفاء ٢- تعرف علي عالم الروح.",
    published: "2y ago"
  },
  {
    id: "824HBZ-px5U",
    title: "كنيسه قلب الآب- فانكوفر السبت ١٤ أكتوبر ٢٠٢٣ مفاتيح الشفاء١- لذته في مخافه الرب",
    published: "2y ago"
  },
  {
    id: "xfyy8wzugIM",
    title: "الاجتماع الصباحي فدي نفسي - المحاضره السادسه - د. ثناء زغلول. part 1",
    published: "2y ago"
  },
  {
    id: "2fj1UlRffSU",
    title: "الاجتماع الصباحي فدي نفسي - المحاضره الرابعه - د. ثناء زغلول part 1",
    published: "2y ago"
  },
  {
    id: "Dv0E6LUc8w4",
    title: "الاجتماع المسائي فدي نفسي - المحاضره الخامسه - د. ثناء زغلول part1",
    published: "2y ago"
  },
  {
    id: "Xcq6x_rCmPc",
    title: "الاجتماع الصباحي فدي نفسي - المحاضره الرابعه - د. ثناء زغلول part2",
    published: "2y ago"
  },
  {
    id: "3qeVUNLECbg",
    title: "الاجتماع المسائي فدي نفسي - المحاضره الخامسه - د. ثناء زغلول part 2",
    published: "2y ago"
  },
  {
    id: "2OeigmGxcw0",
    title: "الاجتماع الصباحي فدي نفسي - المحاضره الثانيه - د. ثناء زغلول. part 1",
    published: "2y ago"
  },
  {
    id: "NRqWTgQO7ww",
    title: "الاجتماع المسائي فدي نفسي - المحاضره الثالثه - د. ثناء زغلول part 1",
    published: "2y ago"
  },
  {
    id: "uR3RGCN7tQo",
    title: "الاجتماع الصباحي فدي نفسي - المحاضره الثانيه - د. ثناء زغلول. part 2",
    published: "2y ago"
  },
  {
    id: "Ungw2hDbHzg",
    title: "الاجتماع المسائي فدي نفسي - المحاضره الثالثه - د. ثناء زغلول part 2",
    published: "2y ago"
  },
  {
    id: "mhavMoUmRyY",
    title: "فدي نفسي - المحاضره الأولي د. ثناء زغلول",
    published: "2y ago"
  },
  {
    id: "5ce69A7_op0",
    title: "Saturday Worship Meeting Sep 2 2023",
    published: "2y ago"
  },
  {
    id: "F2sCq6bsExA",
    title: "فترة التسبيح والعبادة السبت 2 سبتمر 2023",
    published: "2y ago"
  },
  {
    id: "_eQ0B1D0NyQ",
    title: "Saturday Worship Meeting august 12 2023",
    published: "2y ago"
  },
  {
    id: "hVUC8Eo7qsU",
    title: "Saturday Worship Meeting august 19 2023",
    published: "2y ago"
  },
  {
    id: "gQ7gOHFh7UU",
    title: "فترة التسبيح والعبادة السبت 12 اب 2023",
    published: "2y ago"
  },
  {
    id: "XqfepaxkLMY",
    title: "فترة التسبيح والعبادة السبت 19 اب 2023",
    published: "2y ago"
  },
  {
    id: "TSm6Avxgbzc",
    title: "فترة التسبيح والعبادة السبت 26 اب 2023",
    published: "2y ago"
  },
  {
    id: "N6r0_CnGO20",
    title: "Saturday Worship Meeting august 5 2023",
    published: "2y ago"
  },
  {
    id: "GGW5c_6OqMs",
    title: "فترة التسبيح والعبادة السبت 5 اب 2023",
    published: "2y ago"
  },
  {
    id: "a5_dTPH-Xi4",
    title: "تعليم هام عن معموديه الماء.",
    published: "2y ago"
  },
  {
    id: "Xy0FtXeGWrk",
    title: "Saturday Worship Meeting July 29, 2023",
    published: "2y ago"
  },
  {
    id: "OKOkfnmTU7Q",
    title: "فترة التسبيح والعبادة السبت 29 يوليو 2023",
    published: "2y ago"
  },
  {
    id: "ro_FyaahVzo",
    title: "اجتماع يوم السبت ٢٢ يوليو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "nd8JwUb9vR4",
    title: "فترة التسبيح والعبادة السبت ٢٢ يوليو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "4JjNUhVV-W8",
    title: "اجتماع يوم السبت ١٥ يوليو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "WUqOIsUYy7I",
    title: "‎لماذا شركة الروح القدس مهمه؟‎",
    published: "2y ago"
  },
  {
    id: "Nddw35XFhAk",
    title: "اجتماع يوم السبت ٢٤ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "dH9wonSfH38",
    title: "اجتماع يوم السبت ١٧ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "_ysZLdCxmHE",
    title: "فترة التسبيح والعبادة السبت ٢٤ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "GsQUeR0hXDY",
    title: "فترة التسبيح والعبادة السبت ١٧ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "vbU7OdDtrcE",
    title: "فترة التسبيح والعبادة السبت ١٠ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "Eq1NU9Nv6XY",
    title: "اجتماع يوم السبت ١٠ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "CCI6E0wanno",
    title: "قد جاء يسوع",
    published: "2y ago"
  },
  {
    id: "aej2c_klK-o",
    title: "اطلب ملء الروح القدس",
    published: "2y ago"
  },
  {
    id: "yGRjdnvwfps",
    title: "السماح الإلهي",
    published: "2y ago"
  },
  {
    id: "L21WAE862-g",
    title: "الرب يشفيني",
    published: "2y ago"
  },
  {
    id: "l5uBM1tmaSY",
    title: "كيف تجد بركة في حياتك؟",
    published: "2y ago"
  },
  {
    id: "FC5QcKqeEM8",
    title: "الفرق بين الإيمان والتدين",
    published: "2y ago"
  },
  {
    id: "yCcFLUJvDdI",
    title: "صلاح الرب والتاديب",
    published: "2y ago"
  },
  {
    id: "ATCS4D4sK_k",
    title: "هل انت محفوظ؟",
    published: "2y ago"
  },
  {
    id: "cBYaJZMHcj4",
    title: "كيف تتعامل مع الرسائل المخيفة؟",
    published: "2y ago"
  },
  {
    id: "p4R7RksS5mk",
    title: "هل الرب يريد أن يشفيني؟",
    published: "2y ago"
  },
  {
    id: "XS6X0hqbKuw",
    title: "أين أجد الراحة؟",
    published: "2y ago"
  },
  {
    id: "GtFsBGuPSns",
    title: "اين اجد الحماية",
    published: "2y ago"
  },
  {
    id: "ef8I81osp88",
    title: "الرب اختارك ودعاك",
    published: "2y ago"
  },
  {
    id: "4_PG-5W2Jdg",
    title: "الأعمال الميتة",
    published: "2y ago"
  },
  {
    id: "qMpZIBLwBtk",
    title: "ماذا بعد الموت؟",
    published: "2y ago"
  },
  {
    id: "2iwnuVOg_i8",
    title: "مصدر الخوف",
    published: "2y ago"
  },
  {
    id: "sbb0nmdosSA",
    title: "أين أجد قيمتي؟",
    published: "2y ago"
  },
  {
    id: "DfAReTRGHZo",
    title: "انتظر موعد الآب",
    published: "2y ago"
  },
  {
    id: "kDcaln3Zm6o",
    title: "من قلب الفشل يحيني",
    published: "2y ago"
  },
  {
    id: "rBDhUbwX7HE",
    title: "اجتماع يوم السبت ٣ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "3s1kadSEDA0",
    title: "اجتماع يوم السبت ٢٧ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "cDIyYXaxvgU",
    title: "فترة التسبيح والعبادة السبت ٣ يونيو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "TTEbGUIwHVY",
    title: "فترة التسبيح والعبادة السبت ٢٧ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "E_wB6iujnyk",
    title: "نعم لنا رئيس كهنا عظيم",
    published: "2y ago"
  },
  {
    id: "-MsvpzxqlHU",
    title: "انت اعظم اروع ما في الدنيا",
    published: "2y ago"
  },
  {
    id: "lsjrbIfHGTM",
    title: "اجتماع يوم السبت ٢٠ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "bf_KoG2mPhM",
    title: "اجتماع يوم السبت ١٣ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "smpIeFdFMw0",
    title: "فترة التسبيح والعبادة السبت ٢٠ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "gxjbCLxmPyI",
    title: "فترة التسبيح والعبادة السبت ١٣ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "YjB3N4EvO9w",
    title: "كنيسه قلب الآب فانكوفر السبت ٦ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "ptunYuVfebM",
    title: "فترة التسبيح والعبادة السبت ٦ مايو ٢٠٢٣",
    published: "2y ago"
  },
  {
    id: "-ovZ5-uDYYU",
    title: "كنيسه قلب الآب فانكوفر السبت ٢٢ أبريل",
    published: "3y ago"
  },
  {
    id: "B50ivYiadN4",
    title: "فترة التسبيح والعبادة السبت ٢٢ ابريل",
    published: "3y ago"
  },
  {
    id: "8y99x75T-L8",
    title: "اجتماع يوم السبت ٢٥ مارس ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "R70xtQqnWsA",
    title: "كنيسه قلب الآب فانكوفر السبت ١٥ أبريل",
    published: "3y ago"
  },
  {
    id: "bnp4PFzvQ38",
    title: "فترة التسبيح والعبادة ١٥ ابريل",
    published: "3y ago"
  },
  {
    id: "4j70k54ZEjc",
    title: "كنيسه قلب الآب- فانكوفر السبت ٨ ابريل ٢٠٢٣ أحتفال عيد القيامه",
    published: "3y ago"
  },
  {
    id: "EHxyLJB_NX0",
    title: "كنيسه قلب الآب- فانكوفر الجمعه ٧ أبريل ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "eic9-EC8Qc8",
    title: "فترة التسبيح والعبادة ٢٥ مارس ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "kPi-0WR1BSU",
    title: "تفسير سفر الرؤيا الحلقة 11 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "j8mJ6ARk0Uk",
    title: "فترة التسبيح والعبادة ٤ مارس ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "yklPjqkZoJA",
    title: "فترة التسبيح والعبادة ٢٨ يناير ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "QVuXgvxUOYE",
    title: "فترة التسبيح والعبادة ١٤ يناير ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "xbRm-Wacjmw",
    title: "فترة التسبيح والعبادة ١٨ مارس ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "jAxgBSErGW4",
    title: "فترة التسبيح والعبادة _ السبت ١٠ ديسمبر ٢٠٢٢",
    published: "3y ago"
  },
  {
    id: "3DHsXHTsHeM",
    title: "فترة التسبيح والعبادة _ السبت ٣ ديسمبر ٢٠٢٢",
    published: "3y ago"
  },
  {
    id: "hwJe7LHMbDU",
    title: "فترة التسبيح والعبادة _ ١٩ نوفمبر ٢٠٢٢",
    published: "3y ago"
  },
  {
    id: "8RHMlUtxFEs",
    title: "فترة التسبيح العبادة_١٢ نوفمبر ٢٠٢٢",
    published: "3y ago"
  },
  {
    id: "6KZkCpOorr0",
    title: "اجتماع يوم السبت ١١ مارس ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "CZfQmyEf19M",
    title: "فترة التسبيح والعبادة السبت ١١ مارس ٢٠٢٣",
    published: "3y ago"
  },
  {
    id: "wssJiCfz7bM",
    title: "فترة التسبيح والعبادة السبت ٥ نوفمبر ٢٠٢٢",
    published: "3y ago"
  },
  {
    id: "84n4sPK2qwo",
    title: "تفسير سفر الرؤيا الحلقة 1 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "25K_n_UkDLY",
    title: "فترة التسبيح والعبادة_السبت ٢٩ أكتوبر ٢٠٢٢",
    published: "3y ago"
  },
  {
    id: "RugZwma-gXA",
    title: "تفسير سفر الرؤيا الحلقة 8 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "qvJmkRPNl_c",
    title: "تفسير سفر الرؤيا الحلقة 2 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "4VlkQH06oi0",
    title: "تفسير سفر الرؤيا الحلقة 3 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "LrzudP5rvBg",
    title: "تفسير سفر الرؤيا الحلقة 4 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "uoqAZaSoOpw",
    title: "تفسير سفر الرؤيا الحلقة 5 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "A-kH-wUwusk",
    title: "تفسير سفر الرؤيا الحلقة 6 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "vV96yOyW4qU",
    title: "تفسير سفر الرؤيا الحلقة 7 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "n0czuZUubNE",
    title: "تفسير سفر الرؤيا الحلقة 10 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  },
  {
    id: "XBhSsGgaf70",
    title: "تفسير سفر الرؤيا الحلقة 9 / راعي الكنيسة / القس بيتر المعصراني",
    published: "3y ago"
  }
];

const SERMON_PLAYLISTS: SermonPlaylist[] = [
  {
    id: "PLg8vlxqLvRxsi4sAa6-YpvY0DyhuWS6RE",
    title: "The Patience & Perseverance / الصبر والمثابره",
    thumbnailVideoId: "yGtkL-i55_0"
  },
  {
    id: "PLg8vlxqLvRxu610tCZzqzqE1TTm4q1-rm",
    title: "Bearers of the Divine Presence / حاملين الحضور الإلهي",
    thumbnailVideoId: "T9QNQkoYcyw"
  },
  {
    id: "PLg8vlxqLvRxudilLMV7ql8Y6byekmi0Qc",
    title: "The God- Kind of Life (Zoe) | حياه الله بداخلنا",
    thumbnailVideoId: "vZDR-PPQm7s"
  },
  {
    id: "PLg8vlxqLvRxuvIbgOr8FsPykERAOqa-_Q",
    title: "How to Prepare for Jesus Return | كيف تستعد لمجيء الرب",
    thumbnailVideoId: "KYG-kmMMsJg"
  },
  {
    id: "PLg8vlxqLvRxsX5MAGt32h0plpdScv0zCn",
    title: "Godliness has value for all things / التقوي نافعه لكل شيء",
    thumbnailVideoId: "yIsOdN3hZAY"
  },
  {
    id: "PLg8vlxqLvRxtfz1vRl0uJf7ZKmQQTJTcE",
    title: "The Glory of The Sons of God / مجد اولاد الله",
    thumbnailVideoId: "VAM9ahM8e5s"
  },
  {
    id: "PLg8vlxqLvRxta_Ju68J9NjmHt0yMQ2tGK",
    title: "تفعيل الحمايه الله الألهيه / God's Divine Protection Activation",
    thumbnailVideoId: "Un3tyYih9-4"
  },
  {
    id: "PLg8vlxqLvRxtedTo4o2-Sg6FZYnz02IXs",
    title: "God's Calling / دعوه الله",
    thumbnailVideoId: "WfdRevEF3x4"
  },
  {
    id: "PLg8vlxqLvRxuPBa91z5A63AD_Q8Ha-gFp",
    title: "Christian Life Foundations and Principles / مبادئ والاسسيات للحياة المسيحي",
    thumbnailVideoId: "Kf0jY0XKs3M"
  },
  {
    id: "PLg8vlxqLvRxsCojVjv1FrjTJkxjNrz3Jr",
    title: "Word of God Series / سلسلة كلمة الله",
    thumbnailVideoId: "H2JasZDe7JY"
  },
  {
    id: "PLg8vlxqLvRxt8AI-XNQkz1WGfVyFpejp-",
    title: "The Glorious of Resurrection / امجاد القيامة",
    thumbnailVideoId: "sCpbljlTXTE"
  },
  {
    id: "PLg8vlxqLvRxvku4ArkDjIfHmq7zBfBQb_",
    title: "Joy of The Lord Is Our Strength /فرح الرب هو قوتنا",
    thumbnailVideoId: "xf3HRMLsh2o"
  },
  {
    id: "PLg8vlxqLvRxsF5wFIWgKMTIYQtzX10QWJ",
    title: "Why did God order the extermination of some nations in the Old Testament? / لماذا أمر الرب بإبادة بعض الشعوب في العهد القديم؟",
    thumbnailVideoId: "fhmGvQlREO0"
  },
  {
    id: "PLg8vlxqLvRxthPya3-Td1IpGbkbe19zy7",
    title: "The importance of spiritual shepherding / اهمية خدمة الرعاية الروحية",
    thumbnailVideoId: "wY3saFRONFM"
  },
  {
    id: "PLg8vlxqLvRxsvaymsZp8qRoxczs-0_tKX",
    title: "Who is the greater in the kingdom of heaven? / فمن هو أعظم في ملكوت السموات؟",
    thumbnailVideoId: "Gjidt5B86IM"
  },
  {
    id: "PLg8vlxqLvRxvjFbjtpMyu2nHsIsB2nWFC",
    title: "Renewing our mind and soul salvation / دراسه عن تجديد الذهن وخلاص النفس",
    thumbnailVideoId: "Qr81eWW-cdk"
  },
  {
    id: "PLg8vlxqLvRxvAbG_o3iPGTbwx601WOrgx",
    title: "the key to answered prayers / مفاتيح الصلاة المستجابة",
    thumbnailVideoId: "zQX9uPbuviY"
  },
  {
    id: "PLg8vlxqLvRxtbmSPU5K0b-rNod_Vi1f-1",
    title: "فدي نفسي - د. ثناء زغلول",
    thumbnailVideoId: "2OeigmGxcw0"
  },
  {
    id: "PLg8vlxqLvRxsJ8RvvrPz_yUG7ZVXMQRVa",
    title: "Short videos",
    thumbnailVideoId: "WUqOIsUYy7I"
  },
  {
    id: "PLg8vlxqLvRxtLgtX5KO8HMRGXu3xdv21y",
    title: "تأملات قصيره مع القس/ بيتر المعصراني",
    thumbnailVideoId: "2iwnuVOg_i8"
  },
  {
    id: "PLg8vlxqLvRxtFmOhfduKVVwiOaktHXM5G",
    title: "ترانيم",
    thumbnailVideoId: "-MsvpzxqlHU"
  },
  {
    id: "PLg8vlxqLvRxuB2UmuncUcRLnIS9eZdiKe",
    title: "Saturday Meetings / اجتماع يوم السبت",
    thumbnailVideoId: "5ce69A7_op0"
  },
  {
    id: "PLg8vlxqLvRxtAR29YaTWKOJb41yoSYpdz",
    title: "Worship time / فترة التسبيح والعبادة",
    thumbnailVideoId: "F2sCq6bsExA"
  },
  {
    id: "PLg8vlxqLvRxvxsOXtY_zshLee0r1eDh7Z",
    title: "تفسير سفر الرؤيا",
    thumbnailVideoId: "kPi-0WR1BSU"
  }
];

const getVideoUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const getPlaylistUrl = (id: string) => `https://www.youtube.com/playlist?list=${id}`;
const getThumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const PlayIcon = () => (
  <svg className="ml-0.5 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const SermonCard: React.FC<{ sermon: SermonVideo }> = ({ sermon }) => (
  <a
    href={getVideoUrl(sermon.id)}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <div className="relative aspect-video overflow-hidden bg-[#1a3a5c]">
      <img
        src={getThumbnailUrl(sermon.id)}
        alt={sermon.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={e => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&w=800&q=80';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
      <div className="absolute left-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
        <PlayIcon />
      </div>
    </div>
    <div className="p-5">
      <h2 className="font-heading text-base font-bold leading-snug text-[#1a3a5c] transition-colors duration-200 group-hover:text-[#b99321]">
        {sermon.title}
      </h2>
      {sermon.published && <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{sermon.published}</p>}
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600">
        Watch on YouTube
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
        </svg>
      </p>
    </div>
  </a>
);

const PlaylistCard: React.FC<{ playlist: SermonPlaylist }> = ({ playlist }) => (
  <a
    href={getPlaylistUrl(playlist.id)}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
  >
    <div className="relative aspect-video overflow-hidden bg-[#1a3a5c]">
      <img
        src={getThumbnailUrl(playlist.thumbnailVideoId)}
        alt={playlist.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={e => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492176273113-2d51f47b23b0?auto=format&fit=crop&w=800&q=80';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />
      <div className="absolute left-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37] text-black shadow-lg transition-transform duration-300 group-hover:scale-110">
        <PlayIcon />
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1a3a5c] shadow">
        Playlist
      </div>
    </div>
    <div className="p-5">
      <h2 className="font-heading text-base font-bold leading-snug text-[#1a3a5c] transition-colors duration-200 group-hover:text-[#b99321]">
        {playlist.title}
      </h2>
      <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-red-600">
        Watch Playlist
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
        </svg>
      </p>
    </div>
  </a>
);

const ServicePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeView, setActiveView] = useState<'sermons' | 'playlist'>('sermons');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredSermons = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return SERMONS;
    return SERMONS.filter(sermon => sermon.title.toLowerCase().includes(query));
  }, [searchTerm]);

  const filteredPlaylists = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return SERMON_PLAYLISTS;
    return SERMON_PLAYLISTS.filter(playlist => playlist.title.toLowerCase().includes(query));
  }, [searchTerm]);

  const isSermonsView = activeView === 'sermons';
  const activeItems = isSermonsView ? filteredSermons : filteredPlaylists;
  const totalPages = Math.ceil(activeItems.length / itemsPerPage);
  const paginatedSermons = filteredSermons.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const paginatedPlaylists = filteredPlaylists.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const visibleCount = isSermonsView ? paginatedSermons.length : paginatedPlaylists.length;
  const totalCount = activeItems.length;

  const setView = (view: 'sermons' | 'playlist') => {
    setActiveView(view);
    setCurrentPage(1);
  };

  return (
    <div className="font-body bg-gray-50 min-h-screen">
      <SEO
        title="Sermons"
        description="Watch Father's Heart Church sermons and sermon playlists from YouTube."
      />

      <div className="bg-[#1a3a5c] py-16 text-center">
        <p className="text-[#D4AF37] font-semibold tracking-[0.3em] text-sm uppercase mb-3">Teachings & Messages</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white">Sermons</h1>
        <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        <p className="text-white/75 mt-4 max-w-2xl mx-auto px-4">
          Watch public sermons and playlists from the Father's Heart Church YouTube channel.
        </p>
      </div>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10 overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100">
            <div className="bg-gradient-to-r from-[#1a3a5c] to-[#0f2540] p-7 text-white flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#D4AF37] bg-white shadow-xl">
                <img
                  src="https://res.cloudinary.com/dyjffxbef/image/upload/v1765302297/logotransport_ljm5vs.png"
                  alt="Father's Heart Ministry"
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold font-heading mb-2">Father's Heart Church on YouTube</h2>
                <p className="text-white/75 text-sm leading-relaxed max-w-2xl">
                  Choose a sermon or playlist below to open it directly on YouTube. Images use the YouTube thumbnails from the channel.
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder={isSermonsView ? 'Search sermons' : 'Search playlists'}
                  className="w-full rounded-full border-2 border-gray-200 bg-white px-5 py-3 pr-11 text-gray-700 shadow-sm transition-all placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
                <svg className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700"
              >
                Visit Channel
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm" role="tablist" aria-label="Sermons view">
              {[
                { key: 'sermons', label: 'Sermons' },
                { key: 'playlist', label: 'Playlist' },
              ].map(option => {
                const selected = activeView === option.key;
                return (
                  <button
                    key={option.key}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setView(option.key as 'sermons' | 'playlist')}
                    className={`min-w-28 rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 ${
                      selected
                        ? 'bg-[#D4AF37] text-[#1a3a5c] shadow'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-[#1a3a5c]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
            <p className="text-center text-sm text-gray-500">
              Showing {visibleCount} of {totalCount} {isSermonsView ? 'sermons' : 'playlists'}
            </p>
          </div>

          {isSermonsView && paginatedSermons.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedSermons.map(sermon => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          ) : !isSermonsView && paginatedPlaylists.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedPlaylists.map(playlist => (
                <PlaylistCard key={playlist.id} playlist={playlist} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-xl bg-white py-16 text-center shadow-inner">
              <p className="text-xl font-medium text-gray-500">
                No {isSermonsView ? 'sermons' : 'playlists'} found.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-14 flex flex-wrap justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="h-10 min-w-10 rounded-full bg-white px-4 font-bold text-gray-600 shadow-sm transition-all hover:bg-[#1a3a5c] hover:text-white disabled:opacity-30"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1)
                .filter(page => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2)
                .map((page, index, pages) => (
                  <React.Fragment key={page}>
                    {index > 0 && page - pages[index - 1] > 1 && <span className="px-1 text-gray-400">...</span>}
                    <button
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-full font-bold transition-all ${
                        currentPage === page
                          ? 'bg-[#1a3a5c] text-white shadow-lg'
                          : 'bg-white text-gray-600 shadow-sm hover:bg-[#1a3a5c]/10'
                      }`}
                    >
                      {page}
                    </button>
                  </React.Fragment>
                ))}
              <button
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="h-10 min-w-10 rounded-full bg-white px-4 font-bold text-gray-600 shadow-sm transition-all hover:bg-[#1a3a5c] hover:text-white disabled:opacity-30"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
