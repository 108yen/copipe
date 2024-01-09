import { CopipeWithTag } from "@/models/copipeWithTag";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function EditModal(props: {
    open: boolean,
    onClose: () => void,
    copipe: CopipeWithTag
}) {
    const { open, onClose, copipe } = props;

    return (
        <Modal open={open} onClose={onClose}>
            <Stack
                direction='column'
                p={3}
                spacing={1}
                borderRadius={2}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: 400,
                    bgcolor: 'background.paper',
                }}
            >
                <Typography variant="h5">{copipe.title}</Typography>
                <Stack direction='row'>
                    {copipe.tag_bodies.map(tag => tag == null ? null : <Chip key={tag} label={tag} size="small" />)}
                </Stack>
                <Divider />
                <Typography variant="body1">{copipe.body}</Typography>
            </Stack>
        </Modal>
    )
}