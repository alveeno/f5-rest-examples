/*
  Copyright (c) 2017, F5 Networks, Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  *
  http://www.apache.org/licenses/LICENSE-2.0
  *
  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an
  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
  either express or implied. See the License for the specific
  language governing permissions and limitations under the License.
*/


"use strict";

class MeWorker {
    constructor() {
        this.WORKER_URI_PATH = "Me";
        this.isPersisted = true;
        this.isPublic = true;
        this.isSingleton = true;
    }

    /**
     * Return default state of document
     *
     * @returns {Object|Promise} default state at startup
     * @memberof MeWorker
     */
    getDefaultState() {
        return {
            FirstName: 'foo',
            LastName: 'bar',
            UserName: 'foobar',
            Emails: [
                'abc@abc.com',
                'def@def.com'
            ]
        };
    }

    /**
     * Return odata schema for document
     *
     * @returns {Object}
     * @memberof MeWorker
     */
    getSchema() {
        return {
            name: 'Person',
            key: {
                propertyRefs: [{ name: 'UserName' }]
            },
            properties: [
                { name: 'UserName', type: 'Edm.String', nullable: false },
                { name: 'FirstName', type: 'Edm.String', nullable: false },
                { name: 'LastName', type: 'Edm.String', nullable: false },
                { name: 'Emails', type: 'Collection(Edm.String)' }
            ]
        };
    }
}

module.exports = MeWorker;
