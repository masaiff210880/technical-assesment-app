import React, { useState } from "react";
import { FiFilter, FiPlus } from "react-icons/fi";
import { BsColumns } from "react-icons/bs";

import FilterButton from "./FilterButton";
import IconButton from "./IconButton";
import SearchInput from "./SearchInput";

function TableHeader() {
    const [search, setSearch] = useState("");

    return (
        <div className="w-full
                    bg-white dark:bg-slate-900 
                   ">

            <div className="flex flex-col gap-4 md:flex-row md:items-center">

                <div className="w-full md:flex-1">
                    <SearchInput
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap gap-3 md:flex-nowrap md:items-center">
                    <FilterButton
                        name="Filter"
                        icon={FiFilter}
                        onClick={() => console.log("Filter clicked")}
                    />

                    <FilterButton
                        name="Column"
                        icon={BsColumns}
                        onClick={() => console.log("Column clicked")}
                    />

                    <IconButton
                        name="New Scan"
                        icon={FiPlus}
                        to="/scan"
                        onClick={() => console.log("New Scan clicked")}
                    />
                </div>

            </div>
        </div>
    );
}

export default TableHeader;