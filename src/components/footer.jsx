export default function Footer() {
    return (
        <>
            <footer class="font-sans tracking-wide bg-white px-8 py-4">
                <div class="flex flex-wrap items-center max-md:flex-col gap-4">
                    <a href='/' class='hover:text-[#007bff] text-black-300 text-sm flex font-bold items-center gap-4'><img src="images/logo.png" alt="" className="w-10"/>TankiGas Corporation</a>
                    <p class='text-black-300 text-sm md:ml-auto'>Copyright © 2024<a href='/' class="hover:underline mx-1">TankiGas Corporation</a>All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}