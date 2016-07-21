/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-06-22[13:12:07]:revised
 *
 * @author <%= author %>
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');

class <%= transformerName %>Transformer extends Transformer {
    _transform(file) {
        return super._transform(file);
    }
    transformAll(files) {
        return super.transformAll(files);
    }
    isTorrential() {
        return false;
    }
}

module.exports = <%= transformerName %>Transformer;
