package com.fii.taip.iassistme.rabbitmq;

public class AmqpConnectionFactory {
    public ConnectionInt getConnectionType(String connectionType){

        if(connectionType == null){
            return null;
        }
        if(connectionType.equalsIgnoreCase("INCOMING")){
            return IncomingConnection.getInstance();

        } else if(connectionType.equalsIgnoreCase("OUTGOING")){
            return OutgoingConnection.getInstance();

        }
        return null;
    }
}