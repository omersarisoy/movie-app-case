"use client";
import React from "react";
import Button from '@/components/Button';
import { PaginationProps } from "@/models/model";
import { ChevronLeft, ChevronRight } from "./Icon";

const Pagination = ({
    startPage = 1,
    endPage,
    page,
    setPage,
}: PaginationProps) => {
    const prevPage = () => {
        if (page === 1) return;
        setPage((prev) => prev - 1);
    };

    const nextPage = () => {
        if (page >= endPage) return;
        setPage((prev) => prev + 1);
    };

    const pageNumbers = Array.from({ length: endPage }, (_, i) => i + 1);

    return (
        <div className="">
            <Button
                className=""
                onClick={prevPage}
            >
                <ChevronLeft className="" />
            </Button>

            <div className="">
                {pageNumbers.map((pageNum) => {
                    return (
                        <Button
                            key={pageNum}
                            type="button"
                            outline
                            className=""
                            onClick={() => setPage(pageNum)}
                        >
                            {pageNum}
                        </Button>
                    );
                })}
            </div>
            <Button
                className=""
                onClick={nextPage}
            >
                <ChevronRight className="" />
            </Button>
        </div>
    );
};
export default Pagination;