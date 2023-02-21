import { Copipe } from "@/components/Atoms";
import supabase from "@/utils/supabase";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

const postCopipe = async (page: number) => {
    const { data, error } = await supabase
        .from('copipe')
        .select()
        .order('id', { ascending: false })
        .range(10 * (page - 1), 9 + 10 * (page - 1));
    const copipes: Array<Copipe> = data != null ? data.map(e => {
        const copipeItem: Copipe = {
            id: e.id,
            inserted_at: e.inserted_at,
            updated_at: e.updated_at,
            body: e.body,
            title: e.title,
        };
        return copipeItem;
    }) : [];
    console.log('pagination fetch');

    return copipes;
}

type Props = {
    pageNum: number;
    setCopipeList: (copipeList: Array<Copipe>) => void;
}

const BasicPagination: React.FC<Props> = ({
    pageNum,
    setCopipeList,
}) => {
    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        await setCopipeList(await postCopipe(value));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        // console.log(value);
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center"
        }}>
            <Pagination count={pageNum} onChange={handleChange} />
        </Box>
    );
}

export default BasicPagination;