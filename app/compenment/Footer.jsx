import React from 'react';

function Footer(props) {
    const united = "./united.png"
    return (
        <div className="mt-4 ">
            <footer className="bg-zinc-950">
                <div className="mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-5">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex justify-center text-teal-600 sm:justify-start">
                            <img src={united} alt="logo" width={90}/>
                        </div>

                        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                           Hamza Anouar - Copyright &copy; 2022. All rights reserved.
                        </p>

                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;