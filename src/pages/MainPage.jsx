import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/main.css'


class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchField : ''
        }
    }


    handleSearchInput = (event) => {
        // this.props.searchText = event.target.value;
        this.setState({
            searchField : event.target.value
        })
    };


    handleSearch = () => {
        let filtered = this.props.searchData.filter(item => item.searchKeywords.join(" ").includes(this.state.searchField));
        this.props.history.push('/store',filtered);
    };


    render() {
        return (
            <div className='p-main-search-bar'>
                <div className='main-page-logo'>MAX SUCCESS</div>
                <Form>
                    <Form.Group controlId="formSearch">
                        <Form.Control type="text" placeholder="Search ..." onChange={this.handleSearchInput}/>
                    </Form.Group>
                    <div className='search-bar-buttons'>
                        <Button variant="secondary" type="button" className='p-main-search-btn'
                                onClick={this.handleSearch}>
                            Search
                        </Button>
                        <Button variant="secondary" type="button" className='p-main-search-btn '>
                            Find for me
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default MainPage;