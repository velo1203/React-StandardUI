import {Button} from '../../components/Common/Button/Button';
import { CheckBox } from '../../components/Common/CheckBox/CheckBox';
import { Input } from '../../components/Common/Input/Input';
import { Select } from '../../components/Common/Select/Select';
import { TextArea } from '../../components/Common/TextArea/TextArea';
import {StyledDefaultPage} from '../../style/layout/StyledDefaultPage';

function Home() {
    return (
    <StyledDefaultPage>

        <Button>Button</Button>
        <Input placeholder="Input" type="text"/>
        <TextArea placeholder="TextArea" type="text" spellCheck={false}/>
        <Select>
            <option value="1">Select</option>
            <option value="2">Select</option>
            <option value="3">Select</option>
        </Select>
        <CheckBox type="checkbox" />
    </StyledDefaultPage>
    );
}

export default Home;
