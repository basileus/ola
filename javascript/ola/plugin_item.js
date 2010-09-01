/**
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU Library General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 *
 * Object that represent a plugin item.
 * Copyright (C) 2010 Simon Newton
 */

goog.require('ola.DataItem');

goog.provide('ola.PluginItem');


/**
 * An object which represents a plugin in the list
 * @param {Object} data the data to use to construct this item.
 * @constructor
 */
ola.PluginItem = function(data) {
  this._id = data['id'];
  this._name = data['name'];
};
goog.inherits(ola.PluginItem, ola.DataItem);


/**
 * Get the id of this universe.
 * @return {number} the universe id.
 */
ola.PluginItem.prototype.id = function() { return this._id; };


/**
 * Get the sort key of this universe.
 * @return {number} the unvierse id.
 */
ola.PluginItem.prototype.sortKey = function() { return this._id; };


/**
 * Return the universe name
 * @return {string} the name.
 */
ola.PluginItem.prototype.name = function() { return this._name; };