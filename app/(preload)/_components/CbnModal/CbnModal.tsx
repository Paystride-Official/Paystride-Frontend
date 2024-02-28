import Link from "next/link";
import React from "react";

type Props = {};

const CbnModal = (props: Props) => {
    return (
        <div>
            <div className="bg-[#FAFAFA] w-[65vw] sm:w-[350px] text-[#7F7F7F] shadow-[0px_2.552px_17.016px_0px_rgba(0,0,0,0.25)]">
                <div className="px-4 sm:px-7 py-1 sm:py-3">
                    <div className="flex flex-col items-center mb-3 sm:mb-5">
                        <h2 className="text-lg sm:text-xl font-semibold mb-1">
                            CBN Policy
                        </h2>
                        <hr className="h-1 bg-[#7F7F7F] w-28 sm:w-32" />
                    </div>
                    <div className="text-xs sm:text-sm pr-3 h-44 overflow-y-scroll">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Volutpat consequat mauris nunc
                            congue nisi vitae suscipit. Ornare suspendisse sed
                            nisi lacus sed viverra tellus in hac. Mattis enim ut
                            tellus elementum. In eu mi bibendum neque.
                        </p>
                        <br />
                        <p>
                            Fringilla phasellus faucibus scelerisque eleifend
                            donec pretium vulputate sapien nec. Nec feugiat in
                            fermentum posuere urna nec tincidunt praesent. A
                            arcu cursus vitae congue mauris rhoncus. In egestas
                            erat imperdiet sed euismod nisi. Nunc mi ipsum
                            faucibus vitae aliquet nec ullamcorper. Enim neque
                            volutpat ac tincidunt.
                        </p>
                        <br />
                        <p>
                            Imperdiet proin fermentum leo vel orci porta non
                            pulvinar neque. Arcu non sodales neque sodales ut.
                            Accumsan in nisl nisi scelerisque eu. Dictum fusce
                            ut placerat orci nulla pellentesque dignissim.
                            Elementum tempus egestas sed sed risus. Risus quis
                            varius quam quisque id diam. Ipsum nunc aliquet
                            bibendum enim facilisis. Nunc id cursus metus
                            aliquam eleifend mi in nulla posuere.
                        </p>
                        <br />
                        <p>
                            Enim lobortis scelerisque fermentum dui faucibus.
                            Lobortis mattis aliquam faucibus purus in massa
                            tempor. Enim ut sem viverra aliquet eget sit amet
                            tellus cras. Semper auctor neque vitae tempus quam
                            pellentesque nec. Velit euismod in pellentesque
                            massa placerat duis ultricies lacus sed. Elementum
                            nibh tellus molestie nunc non blandit massa enim.
                            Donec ultrices tincidunt arcu non sodales. Dictum
                            sit amet justo donec enim.
                        </p>
                    </div>
                </div>
                <div className="text-end text-[10px] sm:text-xs pb-1 pr-2">
                    <Link href="">Read more at CBN.com</Link>
                </div>
            </div>
        </div>
    );
};

export default CbnModal;
