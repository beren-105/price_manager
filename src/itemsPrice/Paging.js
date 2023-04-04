import { useState } from "react";
import Pagination from "react-js-pagination"
import './Paging.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Paging({ list, page ,setPage, showItems }) {

    const handlePageChange = (page) => {
        setPage(page);
    }

    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={showItems}
            totalItemsCount={list.length}
            prevPageText={<FontAwesomeIcon icon={faAngleLeft} color="#aaa" />}
            nextPageText={<FontAwesomeIcon icon={faAngleRight} color="#aaa" />}
            hideFirstLastPages={true}
            onChange={handlePageChange}
        />
    )
}