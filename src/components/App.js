/* @flow */
import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'

const instructions = Platform.select({
  dom: 'Press Cmd+R to reload,\n'
})

type Props = {}
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Welcome>Welcome to React Native!</Welcome>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
    )
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`

const Welcome = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
`

const Instructions = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5px;
`
