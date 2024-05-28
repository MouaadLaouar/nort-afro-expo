import photo from "../../assets/electronicCard.jpg";
import pic1 from "../../assets/elctro/pic1.jpg";
import pic2 from "../../assets/elctro/pic2.jpg";
import pic3 from "../../assets/elctro/pic3.jpg";
import pic4 from "../../assets/elctro/pic4.jpg";
import pic5 from "../../assets/elctro/pic5.jpg";
import pic6 from "../../assets/elctro/pic6.jpg";
import pic7 from "../../assets/elctro/pic7.jpg";
import pic8 from "../../assets/elctro/pic8.jpg";
import pic9 from "../../assets/elctro/pic9.jpg";


const Elctro = (): JSX.Element => {
    return (
        <div className="max-w-[85rem] px-4 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div className=" p-20">
                    <img
                        className="rounded-xl"
                        src={photo}
                        alt="Global Bag Logo"
                    />
                </div>

                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                               Électroménagers,
                            </h2>
                            <p className="text-gray-500 ">
                                Nous offrons la plus
                                large gamme d'électroménagers de haute qualité
                                sur le marché pour répondre aux besoins les plus
                                exigeants, de la durabilité aux appareils
                                spécialisés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:max-w-2xl md:mx-auto">
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 my-8">
    <div className="space-y-2">
      <img className="size-40 object-cover" src={pic1} alt="Image Description" />
      <img className="size-40 object-cover" src={pic2} />
      <img className="size-40 object-cover" src={pic3} alt="Image Description" />
    </div>
    <div className="space-y-2">
      <img className="size-40 object-cover" src={pic4} alt="Image Description" />
      <img className="size-40 object-cover" src={pic5} alt="Image Description " />
      <img className="size-40 object-cover" src={pic6} alt="Image Description" />
    </div>
    <div className="space-y-2">
      <img className="size-40 object-cover" src={pic7} alt="Image Description" />
      <img className="size-40 object-cover" src={pic8} alt="Image Description" />
      <img className="size-40 object-cover" src={pic9} alt="Image Description" />
    </div>
    
    
  </div>
</div>


        </div>
    );
};

export default Elctro;
