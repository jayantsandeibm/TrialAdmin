<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <outboundMessages>
        <fullName>PublishOpportunity</fullName>
        <apiVersion>35.0</apiVersion>
        <endpointUrl>http://intg-playground.herokuapp.com/sfdc/omlistener/endpoint/c158e69a-be59-4402-a077-f4646c852f6d</endpointUrl>
        <fields>Id</fields>
        <fields>IsWon</fields>
        <fields>Name</fields>
        <includeSessionId>true</includeSessionId>
        <integrationUser>colin_cdev.7sgtxn2chvc5.c9gwam3fc8.mfnjb6wc9ixh@archtrial.sfg.september.1962.com</integrationUser>
        <name>PublishOpportunity</name>
        <protected>false</protected>
        <useDeadLetterQueue>false</useDeadLetterQueue>
    </outboundMessages>
    <rules>
        <fullName>PublishOpportunityOn</fullName>
        <active>true</active>
        <criteriaItems>
            <field>Opportunity.StageName</field>
            <operation>equals</operation>
            <value>Closed Won</value>
        </criteriaItems>
        <triggerType>onAllChanges</triggerType>
    </rules>
</Workflow>
