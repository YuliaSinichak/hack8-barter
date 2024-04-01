"use client";
import { inter, press_start } from "@/app/fonts";
import { toggleModal } from "@/redux/modalSlice";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";
import { RootState } from "@/redux/store";
import { CardProps, ModalParams, dataItem } from "@/types";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const explanation: {
  'Пакет A': dataItem[];
  'Пакет B': dataItem[];
  'Пакет C': dataItem[];
} = {
  'Пакет A': [
    {
      heading: "Промоція в Instagram story",
      details:
        "Розміщення інформації та згадка компанії B 1 Instagram story.",
    },
    {
      heading: "Згадка про компанію в постпроєктному відео",
      details:
        "Логотип Вашої компанії у відео, яке буде розміщене в нашому Instagram після завершення проєкту. Згадка про компанію зʼявляться в кінці відео під час подяки партнерам проєкту.",
    },
    {
      heading: "Розміщення банеру на місці події",
      details:
        "Під час проведення змагань, буде розміщений банер Вашої компанії. Банер надається компанією.",
    },
  ],
  'Пакет B': [
    {
      heading: "Лого на бренд-волл",
      details:
        "Розміщення логотипа Вашої компанії на бренд - волл проєкту, який буде розміщено на сцені протягом усієї події.",
    },
    {
      heading: "Промоція в Instagram-story",
      details:
        "Розміщення інформації та згадка компанії в 3 Instagram-story.",
    },
    {
      heading: "Згадка в постпроєктному відео",
      details:
        "Логотип Вашої компанії у відео, яке буде розміщене в нашому Instagram після завершення проєкту. Згадка про компанію зʼявляться в кінці відео під час подяки партнерам проєкту.",
    },
    {
      heading: "Транслювання відеоролика на місці події",
      details:
        "На місці проведення змагань будуть транслюватися відеоролики компаній. Необхідні відеоматеріали надає компанія-учасник.",
    },
    {
      heading: "Розміщення банеру на місці події",
      details:
        "Під час проведення змагань, буде розміщений банер Вашої компанії. Банер надається компанією.",
    },
  ],
  'Пакет C': [
    {
      heading: "Лого на бренд-волл",
      details:
        "Розміщення логотипа Вашої компанії на бренд - волл проєкту, який буде розміщено на сцені протягом усієї події.",
    },
    {
      heading: "Інтерактивні Instagram stories",
      details:
        'Промоція компанії в 3-4 Instagram stories на офіційній сторінці нашої організації (@best_Iviv). Приклади можливих рубрики: "Question & Answer", "Цікаві факти" та інше. На фоні живих фото/відео - питання у вигляді вікторини. ',
    },
    {
      heading: "Згадка про компанію в постпроєктному відео",
      details:
        "Логотип Вашої компанії у відео, яке буде розміщене в нашому Instagram після завершення проєкту. Згадка про компанію зʼявляться в кінці відео під час подяки партнерам проєкту.",
    },
    {
      heading: "Транслювання відеоролика на місці події",
      details:
        "На місці проведення змагань будуть транслюватися відеоролики компаній. Необхідні відеоматеріали надає компанія-учасник.",
    },
    {
      heading: "Розміщення банеру на місці події",
      details:
        "Під час проведення змагань, буде розміщений банер Вашої компанії. Банер надається компанією.",
    },
    {
      heading: "Пост-дайджест у Telegram-каналі",
      details:
        " ",
    },
    {
      heading: "Участь у нетворкінгу",
      details:
        "Нетворкінг надає Вам можливість, у неформальній обстановці, зустрітися з учасниками змагань та представниками інших компаній. Нетворкінг триватиме орієнтовно годину.",
    },
    
  ],
};

const Card = ({
  name,
  price,
  services,
  annotation,
  active,
  compulsory,
  handleModal,
}: CardProps) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    dispatch(toggleSponsorship({ name }));
};

  return (
    <div className={"flex w-full"}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleTogglePacket();
        }}
        className={`cursor-pointer rounded-2xl w-full backdrop-blur-lg bg-black bg-opacity-30 flex flex-col border-grey justify-between gap-3 md:gap-5 p-8 lg:p-8 border-2 ${
          active ? "border-hack-green " : "border-neutral-500"
        }`}
      >
        <div className="flex w-full justify-between items-start max-w-xl ">
          <h5
            className={`${press_start.className} text-xl md:text-3xl self-center`}
          >
            {name}
          </h5>
          <button
            onClick={() => {
              handleModal({ name, modalData: explanation[name] as any });
            }}
          >
            <Image
              src="/info.svg"
              width={50}
              height={50}
              alt="info"
              className="md:w-12 w-8"
            />
          </button>
        </div>
        <div className="w-full">
          {services.map((s, index) => (
            <li key={index} className={`${inter.className} text-md md:text-ld`}>
              {s}
            </li>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center gap-1 z-20">
          <button
            className={`${press_start.className} ${
              compulsory ? "cursor-auto" : "cursor-auto"
            } text-md md:text-md bg-black rounded-xl border-2 w-fit border-hack-green text-hack-green px-4 lg:px-6 py-2 self-center`}
          >{`${price} грн`}</button>
        </div>
      </div>
    </div>
  );
};

export default function Offers() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);

  const dispatch = useDispatch();

  const handleModal = ({ name, modalData }: ModalParams) =>
    dispatch(toggleModal({ name, modalData }));

  return (
    <section
      className=" relative min-h-screen flex flex-col justify-center items-center px-6 mx-5 w-full gap-8 my-10"
      id="offers"
    >
      <h2
        className={`${press_start.className} text-3xl text-hack-green my-16  md:text-5xl text-center self-center`}
      >
        Пропозиції
      </h2>
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 items-start">
      <div className="flex flex-col justify-center text-left lg:max-w-lg">
        <p className={`${press_start.className} text-white text-xl`}>Після успішного завершення хакатону вам надається фото та відеозвіт від організаторів.</p>
        <p className={`${inter.className} text-gray-300 my-5`}>Кожен партнер проєкту має змогу долучитись до благодійного збору-розіграшу для ЗСУ в наших соціальних мережах. Серед людей, що задонатять, випадковим чином оберуться переможці, які отримають подарунки від компаній-партнерів.</p>
      </div>
      <Image
          src="/Elipse.png"
          width={1000}
          height={1000}
          alt=" "
          className="hidden lg:flex absolute -right-32 bottom-12 pointer-events-none z-0"
       />
       <Image
          src="/BenyaOffers.png"
          width={600}
          height={600}
          alt=" "
          className="hidden lg:flex absolute -right-4 bottom-48 pointer-events-none levitate-bubbles2 z-0"
       />
       <Image
          src="/Hearts.png"
          width={300}
          height={300}
          alt=" "
          className="hidden lg:flex absolute right-80 bottom-0 opacity-30 pointer-events-none z-0 levitate-bubbles1"
       />
      <div className="flex flex-col self-center items-center justify-center gap-4 z-20">
        {sellingPoints.map((sp) => {
          return <Card key={sp.name} handleModal={handleModal} {...sp} />;
        })}
      </div>
      </div>
    </section>
  );
}
