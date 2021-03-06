/**
 * Copyright (C) <%= copyrightDate %> pantojs.xyz
 * index.js
 *
 * changelog
 * <%= datetime %>:revised
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
    /*
    transformAll(files) {
        return super.transformAll(files);
    }
    */
    isTorrential() {
        // True->transformAll, False->_transform
        return false;
    }
    isCacheable() {
        // Return true if and only if your transformer is idempotent for file content
        return !!this.options.isCacheable;
    }
}

module.exports = <%= transformerName %>Transformer;
