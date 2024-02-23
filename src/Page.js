import React from 'react'
import PaginatedData from "../src/helper/Pagination";
const Page = () => {
    const itemPerpage = 3;
    return(
        <div>
            <h1> List Of Names</h1>
            <PaginatedData itemsPerPage={itemPerpage} />
        </div>
    );
 
};
export default Page;