import * as React from 'react';
import{View, Text} from 'react-native';
import{Dimentions} from 'react-native';

export default class SwipeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allNotifications:this.props.allNotifications
        }
    }
    onSwipe=(swipeData)=>{
     var allNotifications = this.state.allNotifications
     const {key,value}=swipeData
     if(value<-Dimentions.get('window').width){
         const newData = [...allNotifications]
         const previousIndex = allNotifications.findIndex(item=>{
             item.key===key
         })
         this.updateRead(allNotifications[previousIndex])
         newData.splice(previousIndex,1)
         this.setState({allNotifications:newData})
     }
    }
    updateRead=(notifications)=>{
      db.collection('all_notification').doc(notification.doc_id).update({
          'notification_status':'read'
      })
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}