#include<bits/stdc++.h>
using namespace std;
// 0 based indexing graphas the graph is starting from 0
vector<int> bfs(int v,vector<int> adj[])
{
    // we already have an adjacency list
    //  we need to create a visited array (initialise the starting node as 1, marking it as visited) and  queue and push the starting node 
    vector<int> bfs;
    int visited[n]={0};
    visited[0]={1}; // starting node is 0
    queue<int> q;
    q.push(0);

    while(!q.empty())  // q.empty() true means yes, the queue is empty. False means no the queue is not empty.
    {
        int node =q.front();
        q.pop();
        bfs.push_back(node);



        for(auto it: adj[node])
        {
            if(!visited[it])    
            {
                visited[it]=1;
                q.push(it);
            }

        }
    }

return bfs;

}

int main()
{
  bfs();   
return 0;
}