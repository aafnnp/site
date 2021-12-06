import {
  Box,
  Button,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import CanIUse from 'components/CanIUse';
import React, { useState } from 'react';
import { FaCode, FaEye, FaFile } from 'react-icons/fa';

export default function FileSystem() {
  const [status, setStatus] = useState({});

  const handleClick = () => {
    navigator.getBattery().then((battery) => {
      console.log(battery);
      setStatus(battery);

      console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
      console.log('Battery level: ' + battery.level * 100 + '%');
      console.log(
        'Battery charging time: ' + battery.chargingTime + ' seconds'
      );
      console.log(
        'Battery discharging time: ' + battery.dischargingTime + ' seconds'
      );

      battery.addEventListener('chargingchange', function () {
        console.log('Battery charging? ' + (battery.charging ? 'Yes' : 'No'));
      });

      battery.addEventListener('levelchange', function () {
        console.log('Battery level: ' + battery.level * 100 + '%');
      });

      battery.addEventListener('chargingtimechange', function () {
        console.log(
          'Battery charging time: ' + battery.chargingTime + ' seconds'
        );
      });

      battery.addEventListener('dischargingtimechange', function () {
        console.log(
          'Battery discharging time: ' + battery.dischargingTime + ' seconds'
        );
      });
    });
  };
  return (
    <Box className="battery">
      <Heading as="h3" textAlign="center" mb={4}>
        Battery
      </Heading>

      <CanIUse tag="battery-status" />
      <Box>
        <Text>
          The Battery Status API, more often referred to as the Battery API,
          provides information about the systems battery charge level
        </Text>
      </Box>
      <Stack spacing={4} my={4} direction="row" align="center">
        <Button colorScheme="twitter" leftIcon={<FaCode />}>
          Source Code
        </Button>
        <Button colorScheme="twitter" leftIcon={<FaFile />}>
          Documents
        </Button>
        <Button
          colorScheme="twitter"
          leftIcon={<FaEye />}
          onClick={handleClick}
        >
          Get Battery Status
        </Button>
      </Stack>

      <Table variant="simple" placement="top" borderWidth="1px">
        <Thead>
          <Tr>
            <Th>Property</Th>
            <Th>Value</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Charging</Td>
            <Td>{status.charging ? 'Yes' : 'No'}</Td>
          </Tr>
          <Tr>
            <Td>Level</Td>
            <Td>{status.level * 100 + '%'}</Td>
          </Tr>
          <Tr>
            <Td>Charging Time</Td>
            <Td>{status.chargingTime + ' seconds'}</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>discharging Time</Th>
            <Th>{status.dischargingTime || 0 + 'seconds'}</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  );
}
