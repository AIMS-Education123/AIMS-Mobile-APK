import 'react-native-gesture-handler';
import { Text, View, Image } from 'react-native';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Services from '../screens/Services';
import StudyDestination from '../screens/StudyDestination';
import Event from '../screens/Event';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ApplyNow from '../screens/ApplyNow';
import NewsBlogs from '../screens/NewsBlogs';




const Drawer = createDrawerNavigator();





const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 2 }}>
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20,
                        height: 150,
                        backgroundColor: '#e0e9f0',
                        marginBottom: 30,
                        // borderBottomWidth: .5
                    }}
                >
                    <Image
                        source={require("../../assets/icons/aims-icon.png")}
                        style={{ width: 60, height: 50, borderRadius: 30 }}
                    />

                    <Text style={{
                        color: "black",
                        fontSize: 18,
                        fontWeight: "bold",
                        marginLeft: 10,
                        marginVertical: 10
                    }}>AIMS EDUCATION</Text>
                </View>

                <DrawerItemList {...props} />

            </DrawerContentScrollView>
        </View>
    );
};







export function DrawerNavigator({ navigation }) {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowOpacity: 2,
                    shadowColor: 'black'
                },
                headerRight: () => (
                    <Image
                        source={require("../../assets/icons/aims-icon.png")}
                        style={{ width: 60, height: 40, marginRight: 30, padding: 5 }}
                    />
                ),
                headerTitle: 'AIMS EDUCATION',
                headerTintColor: "black",
                headerTitleAllowFontScaling: 'true'
            }}

            drawerContent={props => <CustomDrawer {...props} />}
        >



            <Drawer.Screen name="landing" component={Home}
                options={{
                    title: "Home",
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="md-home"
                            size={size}
                            color={focused ? 'black' : '#CF9A2C'}
                        />
                    ),
                }}
            />


            <Drawer.Screen name="Services" component={Services}
                options={{
                    title: "Services",
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons name="miscellaneous-services" size={24} color={focused ? 'black' : '#CF9A2C'} />
                    ),
                }}
            />


            <Drawer.Screen name="Study Destination" component={StudyDestination}
                options={{
                    title: "Study Destination",
                    drawerIcon: ({ focused, size }) => (
                        <FontAwesome name="plane" size={24} color={focused ? 'black' : '#CF9A2C'} />
                    ),
                }}
            />


            <Drawer.Screen name="NewsBlogs" component={NewsBlogs}
                options={{
                    title: "Blogs",
                    drawerIcon: ({ focused, size }) => (
                        <MaterialCommunityIcons name="post-outline" size={24} color={focused ? 'black' : '#CF9A2C'} />
                    ),
                }}
            />



            <Drawer.Screen name="Events" component={Event}
                options={{
                    title: "Events",
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons name="event" size={24} color={focused ? 'black' : '#CF9A2C'} />
                    ),
                }}
            />


            <Drawer.Screen name="About" component={About}

                options={{
                    title: "About Us",
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="people"
                            size={size}
                            color={focused ? 'black' : '#CF9A2C'}
                        />
                    ),
                }}
            />


            <Drawer.Screen name="Contact" component={Contact}
                options={{
                    title: "Contact",
                    drawerIcon: ({ focused, size }) => (
                        <FontAwesome name="address-book" size={24} color={focused ? 'black' : '#CF9A2C'} />
                    ),
                }}
            />


            <Drawer.Screen name="ApplyNow" component={ApplyNow}
                options={{
                    title: "Apply Now",
                    drawerIcon: ({ focused, size }) => (
                        <Entypo name="export" size={24} color={focused ? 'black' : '#CF9A2C'} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

