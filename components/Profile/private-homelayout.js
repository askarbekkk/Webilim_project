import PrivateHeader from "./PrivateHeader/private-header";
import PrivateModal from "./PrivateHeader/private-modal";


export default function PrivateHomeLayout({children}) {
    return (

        <div className="container mx-auto pt-[40px]">
            <div className="grid grid-cols-6 mt-10">
                <div className="col-span-6">
                    <PrivateModal/>
                </div>
                <div className="col-span-2">
                    <PrivateHeader/>
                </div>
                <div className="col-span-4">
                    <main>{children}</main>
                </div>
            </div>
        </div>


    )
}
