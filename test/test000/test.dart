// Copyright (c) 2015-2016, SnowGremlin. All rights reserved. Use of this source code
// is governed by a BSD-style license that can be found in the LICENSE file.

library ThreeDart.test.test000;

import 'dart:html' as html;
import 'dart:math' as math;
import 'dart:async' as async;
import 'dart:convert' as convert;

import 'package:ThreeDart/Data.dart' as Data;
import 'package:ThreeDart/Math.dart' as Math;

part 'testTools.dart';
part 'matrix2.dart';
part 'vertexType.dart';

void main() {
  TestManager tests = new TestManager.byId("output");
  vertexTypeTests(tests);
  addMatrix2Tests(tests);
}
