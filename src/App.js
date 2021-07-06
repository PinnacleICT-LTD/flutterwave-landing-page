import './App.css';
import React from 'react';
import { Box, Button, ButtonGroup, Checkbox, Spacer, Flex, CheckboxGroup, Text } from "@chakra-ui/react";
import Dropdown from 'react-dropdown';
import Hygeia from './assets/hygeia.png';
import Krispy from './assets/krispy.png';
import Max from './assets/max.png';
import Pos from './assets/pos.jpg';
import Samke from './assets/samke.png';

const options = ['one','two'];

function App() {
  return (
    <div className="App">
      <div className="body">
      <header className="App-header">
        <Flex>
          <Text>Flutter<strong>wave</strong></Text>
        </Flex>
        <Spacer />
        <Box>
          <ButtonGroup>
            <Dropdown arrowClassName="myArrow" options={options} value={"Our Solutions"} placeholder="Our Location">      
              
            </Dropdown>
            <Text>Developer</Text>
            <Dropdown options={options} value={"Resources"}/>
            <Text>Pricing</Text>
            <Text>Sign in</Text>
            <Button className="App-signup" colorScheme="orange">Create account</Button>
          </ButtonGroup>
        </Box>
        
      </header>
        <div className="header-content">
            <Box className="row">
              <Text className="grow">Grow your business with Flutterwave.</Text>
              <Text className="grow1">The easiest way to make and accept payments from customers anywhere in the world.</Text>
              <Button colorScheme="orange" className="App-signup">Create account {'>'} </Button>
              <Button className="App-speak"><a>Speak with use {'>'} </a></Button>
            </Box>

              <Box className="row">
                <Box className="images-container-2">
                  <Box className="image-1">
                    <img src={Hygeia} width="100%" />
                  </Box>
                  <Box className="image-2">
                    <img src={Max} width="100%" />
                  </Box>
                  <Box className="image-3">
                    <img src={Krispy} width="100%"  />
                  </Box>
                  <Box className="image-4">
                    <img src={Samke} width="100%"  />
                  </Box>
              </Box>
            </Box>
        </div>
      </div>

        <div className="body1">
          <Box className="max">
            <Text className="header center">Create seamless payment
            <Text className="center">experience for your customers</Text></Text>
            <Box className="max">
              <Box className="max-image">
                <img src={Max} width="90%" height="90%" />
              </Box>
              <Box className="max-body" width="50%" height="50%">
                <h3 className="h3"><Text>Accept payments
                  <Text>anywhere</Text></Text></h3>
                  <p className="P">One platform that lets you sell wherever your cutomers are &dash online, in-person,
                    anywhere in the world, and everywhere in-between.
                  </p>
                  
                  <Box className="row">

                    <Box className="column">
                      <Text className="header">Online (Website & Mobile)</Text>
                      <Text>Sell online with an ecommerce website, Mobile App and more.</Text>
                    </Box>

                      <Box className="row">
                        <Box className="column">
                          <Text className="header">POS (Point Of Sale)</Text>
                          <Text>Sell in-person at your store locations, pop-ups, concerts.</Text>
                        </Box></Box>

                    <Box className="row">
                      <Text className="header">Reach more people with more payment methods</Text>
                      <Text>with little to no effort, the boundaries to scalling your business and reach more customers with just one platform.</Text>
                      
                    </Box>
                    
                    <Box className="row">
                      <Box className="column">
                        <CheckboxGroup className="checkbox-list-1">
                          <Checkbox>Debit and Credit Cards</Checkbox>
                          <Checkbox>Mobile Money</Checkbox>
                          <Checkbox>M-Pesa</Checkbox>
                          <Checkbox>Bank Transfer</Checkbox>
                        </CheckboxGroup>
                      </Box>
                      <Box className="column">
                      <CheckboxGroup className="checkbox-list-2">
                          <Checkbox>Bank Account</Checkbox>
                          <Checkbox>POS</Checkbox>
                          <Checkbox>Visa QR</Checkbox>
                          <Checkbox>USSD</Checkbox>
                        </CheckboxGroup>
                      </Box>
                    </Box>
                  </Box>
              </Box>
            </Box>
          </Box>

          <Box>
            <Box>
              <Box>
                <Text className="h3">Issue cards, create new businesses.</Text>
                <p className="P"><Text>Create cards for your team, add spending limits, make them site-specific and so much more.</Text></p>
              </Box>

              <Box>
                <Text className="h3">Create virtual Mastercard and VISA cards</Text>
                <p className="P"><Text>Using the Flutterwave API, you can instanly create and manage virtual cards. Cards can be used instantly through wallets and global websites.</Text></p>
              </Box>
            </Box>

            <Box className="video">

            </Box>
          </Box>

          <Box>
            <Box className="video">

            </Box>

            <Box>
              <Text className="h3">Safety and security guaranteed.</Text>
              <p className="P">At Flutterwave, we take security seriously so every
              payment made on our platform is 100% secure, even exceeding industry standard.</p>
            </Box>

            <Box>
              <Text className="header">ISO 27001 & 22301 Certification</Text>
              <Text className="P">The ISO 27001 & 22301 certification means  that we have acceptable business practices and processes, including a robust business continuity plan.</Text>
            </Box>

            <Box>
              <Text className="header">PA DSS & PCI DSS Compliant</Text>
              <Text className="P">This certification is proof that Flutterwave as a payment gateway processor has satisfied highest level of Security Audit.</Text>
            </Box>
          </Box>

          <Box>
            <Box className="slider">

            </Box>

            <Box>
              <Text className="h3">The best businessesses all over the world, big and small, trust Flutterwave for growth.</Text>
              <Text className="P">Flutterwave supports some of the best businessessesall over the worl.</Text>
              <a href="#"><Text className="caps">check out our customer success stories</Text></a>
            </Box>
          </Box>
          <Box className="wrapper">
            <Box className="images-container-1">
              <Box className="box">
                <Text className="grow">Grow your business with Flutterwave.</Text>
                <Text className="grow1">The easiest way to make and accept payments from customers anywhere in the world.</Text>
                <Button colorScheme="orange" className="App-signup">Create account {'>'} </Button>
                <Button className="App-speak"><a>Speak with use {'>'} </a></Button>
              </Box>
          </Box>

          <Box className="images-container-2">
              <Box className="image-1">
                <img src={Hygeia} />
              </Box>
              <Box className="image-2">
                <img src={Pos} />
              </Box>
              <Box className="image-3">
                <img src={Krispy} />
              </Box>
              <Box className="image-4">
                <img src={Samke} />
              </Box>
          </Box></Box>
        </div>
    </div>
  );
}

export default App;
