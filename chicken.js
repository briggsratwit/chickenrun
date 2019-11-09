/**
 * Chicken class for dino run clone
 * Copyright (C) 2019 Micah Schuster
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * The Chicken class stores the data and
 * draws the graphics for the chicken in
 * our dino run clone.
 */


class Chicken{
  constructor(){
    this.d = 100;
    this.r = this.d/2;
    this.x = 50 + this.r;
    this.y = height - this.r;
}
