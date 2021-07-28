import React from 'react';
import { Accordion, SubHeader, Info, Categories } from '../../components';
import {View, Text, ScrollView, StatusBar} from 'react-native';
import {styles} from './styles';


const data = [{title: "General", page: 0},{title: "Safety and Security", page: 1},{title: "Product", page: 2}, {title: "Fees and Charges", page: 3}]
export default function Screen() {

    React.useEffect(() => {
        let arr = [...data];
        arr.shift();
        setListData([...arr]);
    }, [])
    const [listData, setListData] = React.useState(data);
    const [header, setHeader] = React.useState(0);
    const manipulateData = (index) => {
           let arr = [...data];
           setHeader(index);
           arr.splice(index, 1); 
           setListData([...arr]);
    }
    return (
        <View style={styles.container}>
             <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />
            <SubHeader page={header} />
            <ScrollView >
            <Accordion />
            <View style={styles.lowerContainer}>
            <Info />
            <Text style={styles.categoryHeader}>Other categories</Text>
            <Categories 
                data={listData}
                swap={manipulateData}
            />
            </View>
            
            
        </ScrollView>
        </View>
    )
}