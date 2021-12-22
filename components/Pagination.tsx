import React from "react";
import Button from "components/Button";
interface Props {
  setPage: (n: number) => void;
  page: number;
  morePages: boolean;
}
const Pagination = ({ setPage, page, morePages }: Props) => (
  <div className="w-full my-3 flex flex flex-row justify-center sm:justify-between">
    <Button 
      handlePage={() => setPage(page - 1)}
      isDisabled={page === 0}
    >
      <>
        <span className="text-2xl">&lt;&lt;</span>
        <span className="text-lg mx-2">Previous</span>
      </>
    </Button>
    <Button 
      handlePage={() => setPage(page + 1)}
      isDisabled={!morePages}
    >
      <>
        <span className="text-lg mx-2">Next</span>
        <span className="text-2xl">&gt;&gt;</span>
      </>
    </Button>
  </div>
);

export default Pagination;
