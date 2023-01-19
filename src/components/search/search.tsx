import SearchIcon from "@mui/icons-material/Search";
import s from  "./search.module.scss"

export const Search = ({handleChange, filter}: any) => {
    // const objCustomer = useSelector(state => state.order.customerData);
    return (
        <div className={s.search_block}>
            <h5>Filter by keywords</h5>
            <div className={s.search}>
                <input type="text" value={filter} onChange={(e)=>handleChange(e)} className={s.search_field} placeholder="The most successful IT companies in 2020"/>
                <SearchIcon className={s.search_icon}/>
            </div>
        </div>
    );
};
