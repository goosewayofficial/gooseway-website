"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsOfServicePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-xl shadow-sm">
        <div className="text-gray-700 leading-relaxed [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-8 [&>h1]:text-gray-900 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:text-gray-900 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:mb-6 [&>p>b]:text-gray-900 [&>p>b]:font-bold">
          {language === "th" ? (
            <>
              <h1>ข้อกำหนดและเงื่อนไข (Terms & Conditions)</h1>
              <p>
                ข้อกำหนดและเงื่อนไขเหล่านี้ใช้กับแอปพลิเคชัน GOOSEWAY (ซึ่งต่อไปนี้จะเรียกว่า &quot;แอปพลิเคชัน&quot;) 
                สำหรับอุปกรณ์พกพา ซึ่งสร้างขึ้นโดย วรันธร จันทร์สว่าง (ซึ่งต่อไปนี้จะเรียกว่า &quot;ผู้ให้บริการ&quot;) 
                เพื่อให้บริการในรูปแบบบริการฟรี (Free service)
              </p>
              <p>
                เมื่อท่านดาวน์โหลดหรือใช้งานแอปพลิเคชันนี้ จะถือว่าท่านยอมรับข้อกำหนดดังต่อไปนี้โดยอัตโนมัติ 
                ผู้ให้บริการขอแนะนำอย่างยิ่งให้ท่านอ่านและทำความเข้าใจข้อกำหนดเหล่านี้อย่างละเอียดก่อนใช้งานแอปพลิเคชัน
              </p>
              <div>
                <p>
                  ห้ามมิให้ทำการคัดลอก แก้ไขดัดแปลงแอปพลิเคชัน ส่วนใดส่วนหนึ่งของแอปพลิเคชัน หรือเครื่องหมายการค้าของเราโดยไม่ได้รับอนุญาต 
                  ห้ามพยายามถอดรหัสรหัสต้นฉบับ (Source Code) ของแอปพลิเคชัน แปลแอปพลิเคชันเป็นภาษาอื่น หรือสร้างเวอร์ชันที่ดัดแปลงมาจากแอปพลิเคชันนี้ 
                  เครื่องหมายการค้า ลิขสิทธิ์ สิทธิในฐานข้อมูล และสิทธิในทรัพย์สินทางปัญญาอื่นๆ ทั้งหมดที่เกี่ยวข้องกับแอปพลิเคชันนี้ยังคงเป็นทรัพย์สินของผู้ให้บริการ
                </p>
              </div>
              <p>
                ผู้ให้บริการมุ่งมั่นที่จะทำให้แอปพลิเคชันมีประโยชน์และมีประสิทธิภาพมากที่สุดเท่าที่จะเป็นไปได้ 
                ด้วยเหตุนี้ ผู้ให้บริการขอสงวนสิทธิ์ในการแก้ไขแอปพลิเคชันหรือเรียกเก็บค่าธรรมเนียมสำหรับบริการเมื่อใดก็ได้และด้วยเหตุผลใดก็ตาม 
                ทั้งนี้ ผู้ให้บริการยืนยันว่าการเรียกเก็บเงินใดๆ สำหรับแอปพลิเคชันหรือบริการจะมีการแจ้งให้ท่านทราบอย่างชัดเจน
              </p>
              <p>
                แอปพลิเคชันมีการจัดเก็บและประมวลผลข้อมูลส่วนบุคคลที่ท่านได้มอบให้แก่ผู้ให้บริการเพื่อการให้บริการ 
                ท่านมีหน้าที่รับผิดชอบในการรักษาความปลอดภัยของโทรศัพท์และการเข้าถึงแอปพลิเคชัน 
                ผู้ให้บริการขอแนะนำอย่างยิ่งไม่ให้ท่านทำการ Jailbreak หรือ Root โทรศัพท์ของท่าน 
                ซึ่งเป็นการลบข้อจำกัดและข้อกำหนดของซอฟต์แวร์ที่ติดตั้งโดยระบบปฏิบัติการอย่างเป็นทางการของอุปกรณ์ 
                การกระทำดังกล่าวอาจทำให้โทรศัพท์ของท่านเสี่ยงต่อมัลแวร์ ไวรัส โปรแกรมอันตราย และส่งผลต่อคุณสมบัติด้านความปลอดภัยของโทรศัพท์ 
                ซึ่งอาจทำให้แอปพลิเคชันทำงานผิดปกติหรือไม่สามารถทำงานได้เลย
              </p>
              <div>
                <p>
                  โปรดทราบว่าแอปพลิเคชันมีการใช้งานบริการจากบุคคลภายนอก (Third-party) ซึ่งมีข้อกำหนดและเงื่อนไขของตนเอง 
                  ท่านสามารถดูข้อกำหนดและเงื่อนไขของผู้ให้บริการภายนอกที่แอปพลิเคชันใช้งานได้ตามลิงก์ด้านล่างนี้:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Play Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://expo.io/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Expo
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                ผู้ให้บริการไม่ขอรับผิดชอบต่อเหตุสุดวิสัยบางประการ ฟังก์ชันบางอย่างของแอปพลิเคชันจำเป็นต้องมีการเชื่อมต่ออินเทอร์เน็ตที่ใช้งานได้ 
                (เช่น Wi-Fi หรือข้อมูลจากผู้ให้บริการเครือข่ายมือถือ) ผู้ให้บริการไม่สามารถรับผิดชอบได้หากแอปพลิเคชันทำงานได้ไม่เต็มประสิทธิภาพ 
                เนื่องจากการเข้าถึง Wi-Fi ไม่ได้ หรือท่านใช้ปริมาณข้อมูลอินเทอร์เน็ตเกินกำหนด
              </p>
              <p>
                หากท่านใช้งานแอปพลิเคชันนอกพื้นที่ที่มี Wi-Fi ข้อตกลงกับผู้ให้บริการเครือข่ายมือถือของท่านจะยังคงมีผลบังคับใช้ 
                ท่านอาจต้องรับผิดชอบค่าใช้จ่ายในการรับส่งข้อมูลระหว่างการใช้งานแอปพลิเคชัน หรือค่าธรรมเนียมอื่นๆ จากบุคคลที่สาม 
                การใช้งานแอปพลิเคชันนี้ถือว่าท่านยอมรับผิดชอบค่าใช้จ่ายดังกล่าว รวมถึงค่าบริการ Data Roaming หากใช้งานนอกพื้นที่บ้านเกิด 
                หากท่านไม่ใช่ผู้ชำระค่าบริการโทรศัพท์ ผู้ให้บริการจะถือว่าท่านได้รับอนุญาตจากผู้ชำระค่าบริการแล้ว
              </p>
              <p>
                ในทำนองเดียวกัน ผู้ให้บริการไม่สามารถรับผิดชอบต่อวิธีการใช้งานแอปพลิเคชันของท่านได้ตลอดเวลา 
                ตัวอย่างเช่น ท่านมีหน้าที่รับผิดชอบในการตรวจสอบว่าอุปกรณ์ของท่านมีแบตเตอรี่เพียงพอ 
                หากแบตเตอรี่หมดและท่านไม่สามารถเข้าถึงบริการได้ ผู้ให้บริการไม่สามารถรับผิดชอบต่อเหตุการณ์นั้นได้
              </p>
              <p>
                ในส่วนของความรับผิดชอบของผู้ให้บริการที่มีต่อการใช้งานแอปพลิเคชันของท่าน แม้ว่าเราจะพยายามทำให้ข้อมูลอัปเดตและถูกต้องอยู่เสมอ 
                แต่เรามีการพึ่งพาข้อมูลจากบุคคลที่สามเพื่อให้ข้อมูลนั้นแก่ท่าน **ผู้ให้บริการจะไม่รับผิดชอบต่อความสูญเสียใดๆ ทั้งทางตรงและทางอ้อม 
                ที่เกิดจากการพึ่งพาฟังก์ชันการทำงานของแอปพลิเคชันนี้เพียงอย่างเดียว**
              </p>
              <p className="bg-yellow-50 p-4 border-l-4 border-yellow-400 font-medium">
                แอปพลิเคชันนี้เป็นเพียงเครื่องมือช่วยในการนำทางเท่านั้น ไม่ควรใช้เป็นแหล่งข้อมูลนำทางเพียงแหล่งเดียว 
                ผู้ใช้งานต้องใช้ดุลยพินิจและความระมัดระวังของตนเองโดยอิงจากสภาพแวดล้อมจริงในขณะนั้น 
                ผู้ให้บริการไม่รับประกันว่าเส้นทางที่แนะนำจะปราศจากสิ่งกีดขวาง อันตราย หรือพื้นที่ที่ไม่สามารถเข้าถึงได้
              </p>
              <h2>การเปลี่ยนแปลงข้อกำหนดและเงื่อนไข</h2>
              <p>
                ผู้ให้บริการอาจอัปเดตข้อกำหนดและเงื่อนไขเหล่านี้เป็นระยะๆ ดังนั้น ท่านควรตรวจสอบหน้านี้อย่างสม่ำเสมอ 
                ผู้ให้บริการจะแจ้งการเปลี่ยนแปลงให้ทราบโดยการโพสต์ข้อกำหนดและเงื่อนไขใหม่ในหน้านี้
              </p>
              <p>ข้อกำหนดและเงื่อนไขเหล่านี้มีผลตั้งแต่วันที่: 2026-03-18</p>
              <h2>ติดต่อเรา</h2>
              <p>
                หากท่านมีคำถามหรือข้อเสนอแนะเกี่ยวกับข้อกำหนดและเงื่อนไขนี้ 
                โปรดติดต่อผู้ให้บริการที่: goosewayofficial@gmail.com
              </p>
            </>
          ) : (
            <>
              <h1>Terms & Conditions</h1>
              <p>
                These terms and conditions apply to the GOOSEWAY app (hereby
                referred to as &quot;Application&quot;) for mobile devices that
                was created by Waranthorn Chansawang (hereby referred to as
                &quot;Service Provider&quot;) as a Free service.
              </p>
              <p>
                Upon downloading or utilizing the Application, you are
                automatically agreeing to the following terms. It is strongly
                advised that you thoroughly read and understand these terms prior
                to using the Application.
              </p>
              <div>
                <p>
                  Unauthorized copying, modification of the Application, any part
                  of the Application, or our trademarks is strictly prohibited. Any
                  attempts to extract the source code of the Application, translate
                  the Application into other languages, or create derivative
                  versions are not permitted. All trademarks, copyrights, database
                  rights, and other intellectual property rights related to the
                  Application remain the property of the Service Provider.
                </p>
              </div>
              <p>
                The Service Provider is dedicated to ensuring that the Application
                is as beneficial and efficient as possible. As such, they reserve
                the right to modify the Application or charge for their services
                at any time and for any reason. The Service Provider assures you
                that any charges for the Application or its services will be
                clearly communicated to you.
              </p>
              <p>
                The Application stores and processes personal data that you have
                provided to the Service Provider in order to provide the Service.
                It is your responsibility to maintain the security of your phone
                and access to the Application. The Service Provider strongly
                advise against jailbreaking or rooting your phone, which involves
                removing software restrictions and limitations imposed by the
                official operating system of your device. Such actions could
                expose your phone to malware, viruses, malicious programs,
                compromise your phone&apos;s security features, and may result in
                the Application not functioning correctly or at all.
              </p>
              <div>
                <p>
                  Please note that the Application utilizes third-party services
                  that have their own Terms and Conditions. Below are the links to
                  the Terms and Conditions of the third-party service providers used
                  by the Application:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Google Play Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://expo.io/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Expo
                    </a>
                  </li>
                </ul>
              </div>
              <p>
                Please be aware that the Service Provider does not assume
                responsibility for certain aspects. Some functions of the
                Application require an active internet connection, which can be
                Wi-Fi or provided by your mobile network provider. The Service
                Provider cannot be held responsible if the Application does not
                function at full capacity due to lack of access to Wi-Fi or if
                you have exhausted your data allowance.
              </p>
              <p>
                If you are using the application outside of a Wi-Fi area, please
                be aware that your mobile network provider&apos;s agreement terms
                still apply. Consequently, you may incur charges from your mobile
                provider for data usage during the connection to the application,
                or other third-party charges. By using the application, you accept
                responsibility for any such charges, including roaming data
                charges if you use the application outside of your home territory
                (i.e., region or country) without disabling data roaming. If you
                are not the bill payer for the device on which you are using the
                application, they assume that you have obtained permission from
                the bill payer.
              </p>
              <p>
                Similarly, the Service Provider cannot always assume
                responsibility for your usage of the application. For instance, it
                is your responsibility to ensure that your device remains charged.
                If your device runs out of battery and you are unable to access
                the Service, the Service Provider cannot be held responsible.
              </p>
              <p>
                In terms of the Service Provider&apos;s responsibility for your use
                of the application, it is important to note that while they strive
                to ensure that it is updated and accurate at all times, they do
                rely on third parties to provide information to them so that they
                can make it available to you. The Service Provider accepts no
                liability for any loss, direct or indirect, that you experience as
                a result of relying entirely on this functionality of the
                application. 
              </p>
              <p className="bg-yellow-50 p-4 border-l-4 border-yellow-400 font-medium">
                The Application is a navigation aid and should not be
                used as a sole source of direction. Users must exercise their own
                judgment and caution based on real-time environmental conditions.
                The Service Provider does not guarantee that routes are free of
                obstacles, hazards, or inaccessible terrain.
              </p>
              <h2>Changes to These Terms and Conditions</h2>
              <p>
                The Service Provider may periodically update their Terms and
                Conditions. Therefore, you are advised to review this page
                regularly for any changes. The Service Provider will notify you of
                any changes by posting the new Terms and Conditions on this page.
              </p>
              <p>These terms and conditions are effective as of 2026-03-18</p>
              <h2>Contact Us</h2>
              <p>
                If you have any questions or suggestions about the Terms and
                Conditions, please do not hesitate to contact the Service Provider
                at goosewayofficial@gmail.com.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
