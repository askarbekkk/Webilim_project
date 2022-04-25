
export default function MyPurchasesHero() {
  return (
    <section id="MyPurchasesHero">
      <div className="w-[100%] px-6 py-10 mb-10 bg-[#282B2E] rounded-[15px]">
        <h1 className="text-white text-[24px] font-bold">МОИ ПОКУПКИ </h1>
        <div className="grid grid-cols-3 mt-10 border-b px-3 py-3 border-[#5D5C5F]">
          <p className="text-[#959595] font-bold">Дата</p>
          <p className="text-[#959595] font-bold">Описание</p>
          <p className="text-[#959595] font-bold">Сумма </p>
        </div>


            <>
              <div
                className="grid grid-cols-3 mt-3  border-b px-3 py-3 border-[#5D5C5F]"
              >
                <p className="text-[#BDBDBD] font-bold">12</p>
                <p className="text-[#BDBDBD] font-bold">Lorem ipsum.</p>
                <p className="text-[#BDBDBD] font-bold">Lorem ipsum dolor sit.</p>
              </div>
            </>

      </div>
    </section>
  );
}
