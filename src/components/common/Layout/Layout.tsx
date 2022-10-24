import React, { memo, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";
import networkImage from "../../../../public/images/banner/infoBanner.jpg";
import Banner from "./Banner";
import { useRecoilValue } from "recoil";
import PageTitle from "./PageTitle";

interface Props {
    children: ReactNode;
}

function Layout({ children }: Props) {
    const router = useRouter();
    const SIDEBAR_HIDDEN = ["/", "/adminLogin"];

    return SIDEBAR_HIDDEN.includes(router.pathname) ? (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    ) : (
        <div className='h-full w-full'>
            <Header />
            <Banner />
            <main className='mx-auto mb-32 flex min-h-[600px] max-w-[1536px] flex-col 2xl:flex-row 2xl:items-start'>
                <Sidebar />
                <div className='w-full p-10 md:px-20 md:py-10'>
                    <PageTitle />
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default memo(Layout);