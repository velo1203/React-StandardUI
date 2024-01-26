import {Button} from '../../components/Common/Button/Button';
import { Input } from '../../components/Common/Input/Input';
import { TextArea } from '../../components/Common/TextArea/TextArea';
import {StyledDefaultPage} from '../../style/layout/StyledDefaultPage';

function Home() {
    return (
    <StyledDefaultPage>

        <Button>Button</Button>
        <Input placeholder="Input" type="text"/>
        <TextArea placeholder="TextArea" type="text" spellCheck={false}/>
    </StyledDefaultPage>
    );
}

export default Home;
