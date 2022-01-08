import {makeActionCreator} from '../utils/makeActionCreator'

export const DEVICE_ACTION = {
    ADD_DEVICE: 'ADD_DEVICE',
    UPDATE_DEVICE_NAME: 'UPDATE_DEVICE_NAME',
    UPDATE_DEVICE: 'UPDATE_DEVICE',
    DELETE_DEVICE: 'DELETE_DEVICE',
    SET_DEVICES: 'SET_DEVICES',

};

export const AddDevice = makeActionCreator(DEVICE_ACTION.ADD_DEVICE, [
    //"id",
    "name",
    "protocol",
    "status",
    "control_type",
    //"img",
], {
    //maybe not best way to create id
    id: () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
})

export const UpdateDeviceName = makeActionCreator(DEVICE_ACTION.UPDATE_DEVICE_NAME, [
    'id',
    'text',
])

export const DeleteDevice = makeActionCreator(DEVICE_ACTION.DELETE_DEVICE, [
    'id',
    'done',
])
