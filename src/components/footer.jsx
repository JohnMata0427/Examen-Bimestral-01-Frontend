export default function Footer() {
    return (
        <>
            <footer id="contact" class="font-sans tracking-wide bg-white px-8 py-4">
                <div class="flex flex-wrap items-center max-md:flex-col gap-4 justify-between">
                    <a href='/' class='hover:text-[#007bff] text-black-300 text-sm flex font-bold items-center gap-4'><img src="images/logo.png" alt="" className="w-10"/>TankiGas Corporation</a>
                    <div className="flex flex-col items-center">
                        <a href='tel:+593987654321' className="flex gap-2"><img src="images/phone.png" alt="" className="h-5"/> +593987654321 </a>
                        <a href='mailto:tankigas@example.com' className="flex gap-2"><img src="images/mail.png" alt="" className="h-5"/> tankigas@example.com </a>
                        <p class='text-black-300 text-sm md:ml-auto'>Copyright © 2024<a href='/' class="hover:underline mx-1">TankiGas Corporation</a>All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}