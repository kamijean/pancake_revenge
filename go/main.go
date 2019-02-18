//go run main.go > file.out
package main

import "fmt"

func flipCount(row string) string {
	count := 0
  for n := 0; n < len(row) - 1; n++ {
    if row[n] != '-' && row[n] != '+' {
      return fmt.Sprint("Bad input:", row[n], " is not a valid character. Must be either - or +.")
    }
		if row[n] != row[n+1] { count++ }
	}
  if row[len(row)-1] == '-' { count++ }
	return fmt.Sprint(count)
}

func validLength(length, low, high int) bool {
	if length < low || length > high {
		fmt.Printf(fmt.Sprint("bad input: ", length, " not in range ", low, " to ", high, "\n"))
    return false
	}
  return true
}

func main() {
  var T int
  var s string
  fmt.Scanf("%d", &T)
  if !validLength(T, 1, 100) { return }
  for t := 1; t <= T; t++ {
    fmt.Scanf("%s", &s)
    fmt.Printf("Case #%d: %s\n", t+1, flipCount(s))
	}
}
